import mongoose from 'mongoose'

import { dbOptions } from '../../config/db.config.js'
import { logInfo, logError } from '../../logs/logger.js'

export class MongoClient {
  constructor () {
    this.client = mongoose
    this.URL = dbOptions.MongoDB.url
  }

  async connect () {
    try {
      this.client.set('strictQuery', false)
      await this.client.connect(this.URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      logInfo.info({ message: 'Successful connection to Mongo database' })
    } catch (error) {
      logError.fatal({
        message: `There as an error connecting the Mongo database: ${error}`,
        error: error,
        section: 'Database client'
      })
    }
  }

  async disconnect () {
    try {
      await this.client.connection.close()
      logInfo.info({ message: 'Successful discconnection to Mongo database' })
    } catch (error) {
      logError.error({
        message: `There as an error disconnecting the Mongo database: ${error}`,
        error: error,
        section: 'Database client'
      })
    }
  }
}
