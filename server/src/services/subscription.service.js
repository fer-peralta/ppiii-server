import { SubscriptionDaoContainer } from './daos.service.js'

export const getSubscriptions = async () => {
  return await SubscriptionDaoContainer.getAll()
}

export const saveUserSubscription = async data => {
  return await SubscriptionDaoContainer.saveData(data)
}

export const findUserSusbcription = async id => {
  return await SubscriptionDaoContainer.getById(id)
}

export const deleteUserSubscription = async id => {
  return await SubscriptionDaoContainer.deleteById(id)
}

export const deleteLogicUserSubscription = async id => {
  return await SubscriptionDaoContainer.deleteLogicById(id)
}

export const deleteAllUserSubscriptions = async () => {
  return await SubscriptionDaoContainer.deleteAll()
}
