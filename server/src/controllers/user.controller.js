import { avatarGenerator } from '../services/avatar.generator.js'
import * as UserService from '../services/user.service.js'
import {
  signUpStrategy,
  logInStrategy
} from '../services/passport.strategies.js'
import { logError, logInfo } from '../logs/logger.js'
import passport from 'passport'

passport.use('signUpStrategy', signUpStrategy)
passport.use('logInStrategy', logInStrategy)

export const getUsers = async (req, res) => {
  try {
    console.log(req.user)
    const response = await UserService.getUsers()
    let newArrayOfUsers = []
    for (const user of response) {
      if (user.state === 'active') {
        newArrayOfUsers.push(user)
      }
    }
    response.length != 0
      ? res.status(200).send({ data: newArrayOfUsers })
      : res.status(200).send({
        message: "There's no users in the database, please add at least one"
      })
  } catch (error) {
    res.status(400).send({
      message: `There was an error getting the users: ${error}`,
      error: error,
      section: 'controller'
    })
  }
}

export const saveUser = async (req, res) => {
  try {
    req.body.avatar = avatarGenerator(req.body.name, req.body.surname)
    const response = await UserService.saveUser(req.body)
    res.status(200).send({ data: response })
  } catch (error) {
    res.status(400).send({
      message: `There was an error saving the user: ${error}`,
      error: error,
      section: 'controller'
    })
  }
}

export const findUser = async (req, res) => {
  try {
    const response = await UserService.findUser(req.params.id)
    res.status(200).json({ data: response })
  } catch (error) {
    res.status(400).json({
      message: `THere was an error finding the user: ${error}`,
      error: error,
      section: 'controller'
    })
  }
}

export const updateUser = async (req, res) => {
  try {
    const response = await UserService.updateUser(req.params.id, req.body)
    res.status(200).send({ data: response })
  } catch (error) {
    res.status(400).send({
      message: `There was an error updating the user: ${error}`,
      error: error,
      section: 'controller'
    })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const response = await UserService.deleteLogicUser(req.params.id)
    res.status(200).json({ data: response })
  } catch (error) {
    res.status(400).json({
      message: `There was an error deleting the user: ${error}`,
      error: error,
      section: 'controller'
    })
  }
}

export const SignUpUserController = async (req, res, next) => {
  try {
    passport.authenticate('signUpStrategy', (error, user, info) => {
      if (error)
        logError.error({
          message: `There was an error: ${error}`,
          error: error
        })
      if (error || !user) return res.json({ message: info.message })
      req.logIn(user, function (error) {
        console.log(user, 'logueando en signup')
        if (error)
          logError.error({
            message: `There was an error: ${error}`,
            error: error
          })
        if (error)
          return res.json({
            message: `There was an error signing up: ${error}`
          })
        // signUpMail(user)
        logInfo.info(`A new user with the id ${user._id} sign up with success`)
        res.json({ user, message: info.message })
      })
    })(req, res, next)
  } catch (error) {
    const errorMessage = { message: `There was an error: ${error}` }
    logError.error(errorMessage)
    res.status(400).json(errorMessage)
  }
}

export const logInUserController = async (req, res, next) => {
  try {
    passport.authenticate('logInStrategy', (error, user, info) => {
      if (error || !user) return res.json({ message: info.message })
      req.logIn(user, error => {
        if (error) return res.json({ message: info.message, error: error })
        res.json({ user, message: info.message })
      })
    })(req, res, next)
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

export const deleteAllUsers = async (req, res) => {
  try {
    const response = await UserService.deleteAllUsers()
    res.status(200).send({ data: response })
  } catch (error) {
    res.status(400).send({
      message: `There was an error deleting the users: ${error}`,
      error: error,
      section: 'controller'
    })
  }
}
