import * as UserService from '../services/user.service.js'
import * as SubscriptionService from '../services/subscription.service.js'
import * as MentoryService from '../services/mentory.service.js'
import { logError, logInfo } from '../logs/logger.js'
import { UserModel } from '../database/models/user.model.js'
import { newSubscriptionMail } from '../services/emails/email.user.subscribed.js'

export const getUserSubscriptions = async (req, res) => {
  try {
    let userId
    if (req.user.id) {
      userId = req.user.id
    } else {
      userId = req.user._id
    }
    const { data } = await UserService.findUser(userId)
    const userSubscriptions = data.subscriptions
    let newArrayOfSubscriptions = []
    for (const subscription of userSubscriptions) {
      if (subscription.state === 'active') {
        newArrayOfSubscriptions.push(subscription)
      }
    }
    newArrayOfSubscriptions.length != 0
      ? res.status(200).send({ data: newArrayOfSubscriptions })
      : res.status(200).send({
          message:
            "There's no subscriptions for the user, please add at least one"
        })
  } catch (error) {
    res.status(400).send({
      message: `There was an error getting the subscriptions: ${error}`,
      error: error,
      section: 'controller'
    })
  }
}

export const saveUserSubscription = async (req, res) => {
  try {
    let userId
    if (req.user.id) {
      userId = req.user.id
    } else {
      userId = req.user._id
    }
    const { data } = await UserService.findUser(userId)
    req.body.email = req.user.email
    if (data.subscriptions.some(e => e.mentoryId == req.body.mentoryId)) {
      res
        .status(200)
        .send({ message: 'The user already was subcripted to the mentory' })
    } else {
      const response = await SubscriptionService.saveUserSubscription(req.body)
      const subscriptionFound = await SubscriptionService.findUserSusbcription(
        response.id
      )
      await UserService.updateUser(data._id, {
        $push: { subscriptions: subscriptionFound.data }
      })
      await MentoryService.updateMentory(req.body.mentoryId, {
        $push: { subscriptors_email: req.user.email }
      })
      const mentory = await MentoryService.findMentory(req.body.mentoryId)
      newSubscriptionMail(data, mentory.data)
      await res.status(200).send({ data: response })
    }
  } catch (error) {
    res.status(400).send({
      message: `There was an error saving the subscription: ${error}`,
      error: error,
      section: 'controller'
    })
  }
}

export const deleteUserSubscription = async (req, res) => {
  try {
    console.log(req.body.mentoryId)
    let user = await UserModel.findOne({ email: req.user.email }).exec()
    if (user.subscriptions.some(e => e.mentoryId == req.body.mentoryId)) {
      await UserService.updateUser(user._id, {
        $pull: { subscriptions: { mentoryId: req.body.mentoryId } }
      })
      await MentoryService.updateMentory(req.body.mentoryId, {
        $pull: { subscriptors_email: req.user.email }
      })
      user = await UserModel.findOne({ email: req.user.email }).exec()
      res
        .status(200)
        .send({ message: 'Subscription deleted', data: user.subscriptions })
    }
  } catch (error) {
    res.status(400).json({
      message: `There was an error deleting the subscriptions: ${error}`,
      error: error,
      section: 'controller'
    })
  }
}

export const deleteAllUserSubscriptions = async (req, res) => {
  try {
    const response = await SubscriptionService.deleteAllUserSubscriptions()
    res.status(200).send({ data: response })
  } catch (error) {
    res.status(400).send({
      message: `There was an error deleting the subscriptions: ${error}`,
      error: error,
      section: 'controller'
    })
  }
}
