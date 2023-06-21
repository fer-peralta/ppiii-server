import { config } from '../config/config.js'
import { logInfo } from '../logs/logger.js'

export const getApiDao = async dbType => {
  let UserDaoContainer
  let MentoryDaoContainer
  let SubscriptionDaoContainer

  logInfo.info(`${dbType} database was selected`)
  logInfo.info(`${config.DB_SETUP} setup for the database was selected`)

  switch (dbType) {
    case 'MONGO':
      const { MongoClient } = await import('./clients/mongo.client.js')
      const { UserModel } = await import('./models/user.model.js')
      const { MentoryModel } = await import('./models/mentory.model.js')
      const { SubscriptionModel } = await import(
        './models/subscription.model.js'
      )
      const client = new MongoClient()
      await client.connect()
      const { UserMongoDao } = await import('./daos/users/user.dao.mongo.js')
      const { MentoryMongoDao } = await import(
        './daos/mentories/mentory.dao.mongo.js'
      )
      const { SubscriptionMongoDao } = await import(
        './daos/subscriptions/subscription.dao.mongo.js'
      )
      UserDaoContainer = new UserMongoDao(UserModel)
      MentoryDaoContainer = new MentoryMongoDao(MentoryModel)
      SubscriptionDaoContainer = new SubscriptionMongoDao(SubscriptionModel)
      break
    case 'MYSQL':
      const { dbOptions } = await import('../config/db.config.js')
      const { UserMariaDbDao } = await import(
        './daos/mentories/user.dao.mariadb.js'
      )
      const { MentoryMariaDbDao } = await import(
        './daos/mentories/mentory.dao.mariadb.js'
      )
      const { SubscriptionMariaDbDao } = await import(
        './daos/subscription/subscription.dao.mariadb.js'
      )
      UserDaoContainer = new UserMariaDbDao(dbOptions.mariaDB, 'users')
      MentoryDaoContainer = new MentoryMariaDbDao(
        dbOptions.mariaDB,
        'mentories'
      )
      SubscriptionDaoContainer = new SubscriptionMariaDbDao(
        dbOptions.mariaDB,
        'subcsriptions'
      )
      break
  }
  return { UserDaoContainer, MentoryDaoContainer, SubscriptionDaoContainer }
}
