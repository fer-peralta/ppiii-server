import { avatarGenerator } from '../services/avatar.generator.js'
import * as UserService from '../services/user.service.js'
import { generateToken } from '../services/jwt.js'
import { logError, logInfo } from '../logs/logger.js'
import { createHash } from '../services/bcrypt.hash.js'
import { UserModel } from '../database/models/user.model.js'

export const SignUpUserController = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email }).exec()
    // const user = await UserService.findUser({ email: req.body.email })

    if (user) {
      res.json({ message: 'The user is already in the database, try to login' })
    }
    req.body.avatar = avatarGenerator(req.body.name, req.body.surname)
    const newUser = {
      email: req.body.email,
      password: createHash(req.body.password),
      name: req.body.name,
      surname: req.body.surname,
      adress: req.body.adress,
      age: req.body.age,
      phone: req.body.phone,
      avatar: req.body.avatar
    }
    const createUser = await UserService.saveUser(newUser)
    const access_token = generateToken(createUser)
    res.json({ message: 'User sign up with success', access_token })
  } catch (error) {
    const errorMessage = { message: `There was an error: ${error}` }
    logError.error(errorMessage)
    res.status(400).json(errorMessage)
  }
}

export const logInUserController = async (req, res, next) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.json({ message: 'Missing credentials' })
    }
    const user = await UserModel.findOne(
      u => u.email == email && u.password == password
    ).exec()
    if (!user) {
      return res.json({ error: 'Wrong credentials' })
    }
    const access_token = generateToken(user)
    res.json({ access_token })
  } catch (error) {
    const errorMessage = { message: `There was an error: ${error}` }
    logError.error(errorMessage)
    res.status(400).json(errorMessage)
  }
}

export const logOutUserController = async (req, res) => {
  try {
    req.logOut(error => {
      if (error)
        logError.error({
          message: `There was an error logging out: ${error}`
        })
      if (error)
        return res
          .status(400)
          .json({ message: `There was an error logging out: ${error}` })
      res.status(200).json({ message: `User log out with success` })
    })
  } catch (error) {
    const errorMessage = { message: `There was an error: ${error}` }
    logError.error(errorMessage)
    res.status(400).json(errorMessage)
  }
}
export const profileUserController = async (req, res) => {
  try {
    res.status(200).json({ message: 'User profile', User: req.user })
  } catch {
    const errorMessage = { message: `There was an error: ${error}` }
    logError.error(errorMessage)
    res.status(400).json(errorMessage)
  }
}
