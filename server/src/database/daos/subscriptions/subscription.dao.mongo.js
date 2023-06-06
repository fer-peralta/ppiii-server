import { MongoManager } from '../../managers/mongo.manager.js'
import { logError } from '../../../logs/logger.js'
import { UserModel } from '../../models/user.model.js'

export class SubscriptionMongoDao extends MongoManager {
  constructor (model) {
    super(model)
  }

  async deleteLogicById (id, user) {
    try {
      if (user.subscriptions.some(e => e.mentoryId == id)) {
        await this.model.findByIdAndUpdate(id, { state: 'inactive' })
      }
      if (documentToDelete) {
        await this.model.findByIdAndUpdate(id, { state: 'inactive' })
        return { message: 'Document deleted successfully' }
      } else {
        logWarn.warn({
          message: `There was an error searching the id, not found`,
          id: id
        })
        return {
          message: `There was an error searching the id, not found`,
          id: id
        }
      }
    } catch (error) {
      logError.error({
        message: `There was an error deleting the document`,
        id: id,
        error: error
      })
      return {
        message: `There was an error deleting the document`,
        id: id,
        error: error
      }
    }
  }
}
