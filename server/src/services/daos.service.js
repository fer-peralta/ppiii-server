import { getApiDao } from '../database/index.database.js'
import { config } from '../config/config.js'

export const { MentoryDaoContainer, UserDaoContainer } = await getApiDao(
  config.DBTYPE
)
