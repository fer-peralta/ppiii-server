import { MariaDbManager } from '../../managers/mariaDb.manager.js'

export class SubscriptionMariaDbDao extends MariaDbManager {
  constructor (options, tableName) {
    super(options, tableName)
  }
}
