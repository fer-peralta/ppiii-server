import { avatarGenerator } from '../services/avatar.generator.js'
import * as MentoryService from '../services/mentory.service.js'
import * as UserService from '../services/user.service.js'
import { UserModel } from '../database/models/user.model.js'

export const getMentories = async (req, res) => {
  try {
    const response = await MentoryService.getMentories()
    let mentoriesActivated = []
    if (Array.isArray(response)) {
      for (const mentory of response) {
        if (mentory.state === 'active') {
          mentoriesActivated.push(mentory)
        }
      }
    }
    response.length != 0
      ? res.status(200).send({ data: mentoriesActivated })
      : res.status(200).send({
          message:
            "There's no mentories in the database, please add at least one.",
          error: false
        })
  } catch (error) {
    res.status(400).send({
      message: `There was an error getting the mentories: ${error}`,
      error: true,
      section: 'controller'
    })
  }
}

export const getOwnMentories = async (req, res) => {
  try {
    const response = await MentoryService.getMentories()
    let ownMentoriesActivated = []
    if (Array.isArray(response)) {
      for (const mentory of response) {
        if (mentory.state === 'active' && mentory.email == req.user.email) {
          ownMentoriesActivated.push(mentory)
        }
      }
    }
    response.length != 0
      ? res.status(200).send({ data: ownMentoriesActivated })
      : res.status(200).send({
          message:
            "There's no own mentories in the database, please add at least one",
          error: false
        })
  } catch (error) {
    res.status(400).send({
      message: `There was an error getting the owned mentories`,
      error: true,
      section: 'controller'
    })
  }
}

export const saveMentory = async (req, res) => {
  try {
    let reqId = ''
    req.user._id ? (reqId = req.user._id) : (reqId = req.user.id)
    const { data, error } = await UserService.findUser(reqId)
    if (error) {
      throw error
    }
    req.body.author = `${data.name} ${data.surname}`
    req.body.email = data.email
    req.body.avatar = avatarGenerator(req.body.title, req.body.author)
    const response = await MentoryService.saveMentory(req.body)
    await UserService.updateUser(reqId, {
      $push: { mentories: { mentoryId: response.id } }
    })
    res.status(200).send({ data: response, error: false })
  } catch (error) {
    res.status(400).send({
      message: `There was an error saving the mentory: ${error}`,
      error: true,
      section: 'controller'
    })
  }
}

export const findMentory = async (req, res) => {
  try {
    const { data, error } = await MentoryService.findMentory(req.params.id)
    if (error) {
      throw error
    }
    res.status(200).json({ data: data, error: false })
  } catch (error) {
    res.status(400).json({
      message: `THere was an error finding the mentory: ${error}`,
      error: true,
      section: 'controller'
    })
  }
}

export const updateMentory = async (req, res) => {
  try {
    const { data, error } = await MentoryService.updateMentory(
      req.params.id,
      req.body
    )
    if (error) {
      throw error
    }
    res.status(200).send({ data: data, error: false })
  } catch (error) {
    res.status(400).send({
      message: `There was an error updating the mentory: ${error}`,
      error: true,
      section: 'controller'
    })
  }
}

export const deleteMentory = async (req, res) => {
  try {
    let user = await UserModel.findOne({ email: req.user.email }).exec()
    const response = await MentoryService.deleteLogicMentory(req.params.id)
    await UserService.updateUser(user._id, {
      $pull: { mentories: { mentoryId: req.params.id } }
    })
    res.status(200).json({ data: response })
  } catch (error) {
    res.status(400).json({
      message: `There was an error deleting the mentory: ${error}`,
      error: error,
      section: 'controller'
    })
  }
}

export const deleteAllMentories = async (req, res) => {
  try {
    const response = await MentoryService.deleteAllMentories()
    res.status(200).send({ data: response })
  } catch (error) {
    res.status(400).send({
      message: `There was an error deleting the mentories: ${error}`,
      error: error,
      section: 'controller'
    })
  }
}
