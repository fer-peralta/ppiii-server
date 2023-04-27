import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { UserModel } from '../database/models/user.model.js'
import { logError } from '../logs/logger.js'
import { isValidPassword, createHash } from './bcrypt.hash.js'
import { avatarGenerator } from './avatar.generator.js'
import { saveUser } from './user.service.js'

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const userFound = await UserModel.findById(id).exec()
    return done(null, userFound)
  } catch (error) {
    return done(error)
  }
})

export const signUpStrategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  async (req, email, password, done) => {
    const user = await UserModel.findOne({ email: email }).exec()
    if (user) {
      return done(null, null, {
        message: 'The user is already in the database, try to login'
      })
    }
    req.body.avatar = avatarGenerator(req.body.name, req.body.surname)

    const newUser = {
      email: email,
      password: createHash(password),
      name: req.body.name,
      surname: req.body.surname,
      adress: req.body.adress,
      age: req.body.age,
      phone: req.body.phone,
      avatar: req.body.avatar
    }
    const createUser = await saveUser(newUser)
    return done(null, createUser, { message: 'User sign up with success' })
  }
)

export const logInStrategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  async (req, email, password, done) => {
    const user = await UserModel.findOne({ email: email }).exec()
    console.log(user)
    // if (error) {
    //   logError.error({ message: `There was an error: ${error}` })
    //   return done(error, null, { message: `There was an error: ${error}` })
    // }
    if (!email)
      return done(null, false, { message: `There's missing credentials` })
    if (req.user) {
      if (email === req.user.email) {
        return done(null, false, { message: `The user is already logged in` })
      }
    }
    if (!user) {
      return done(null, false, {
        message: 'The user is already in the database, try to login'
      })
    } else {
      const match = isValidPassword(user, password)
      if (match) {
        return done(null, user, { message: 'User log in with success' })
      } else {
        return done(null, false, { message: 'The password is incorrect' })
      }
    }
  }
)
