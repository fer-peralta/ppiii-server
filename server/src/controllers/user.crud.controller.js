import { avatarGenerator } from '../services/avatar.generator.js'
import * as UserService from '../services/user.service.js'
import { logError, logInfo } from '../logs/logger.js'

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
