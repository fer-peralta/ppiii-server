import { UserDaoContainer } from './daos.service.js'

export const getUsers = async () => {
  return await UserDaoContainer.getAll()
}

export const saveUser = async data => {
  return await UserDaoContainer.saveData(data)
}

export const findUser = async id => {
  return await UserDaoContainer.getById(id)
}

export const updateUser = async (id, body) => {
  return await UserDaoContainer.updateById(id, body)
}

export const deleteUser = async id => {
  return await UserDaoContainer.deleteById(id)
}

export const deleteLogicUser = async id => {
  return await UserDaoContainer.deleteLogicById(id)
}

export const deleteAllUsers = async () => {
  return await UserDaoContainer.deleteAll()
}
