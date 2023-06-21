import { MongoManager } from '../../managers/mongo.manager.js'

export class UserMongoDao extends MongoManager {
  constructor (model) {
    super(model)
  }
}
