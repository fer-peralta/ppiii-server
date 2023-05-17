import { MentoryDaoContainer } from './daos.service.js'

export const getMentories = async () => {
  return await MentoryDaoContainer.getAll()
}

export const saveMentory = async data => {
  return await MentoryDaoContainer.saveData(data)
}

export const findMentory = async id => {
  return await MentoryDaoContainer.getById(id)
}

export const updateMentory = async (id, body) => {
  return await MentoryDaoContainer.updateById(id, body)
}

export const deleteMentory = async id => {
  return await MentoryDaoContainer.deleteById(id)
}

export const deleteLogicMentory = async id => {
  return await MentoryDaoContainer.deleteLogicById(id)
}

export const deleteAllMentories = async () => {
  return await MentoryDaoContainer.deleteAll()
}
