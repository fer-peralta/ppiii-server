import { MongoManager } from '../../managers/mongo.manager.js'

export class MentoryMongoDao extends MongoManager {
  constructor (model) {
    super(model)
  }
}
