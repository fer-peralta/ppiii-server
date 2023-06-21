import { MariaDbManager } from '../../managers/mariaDb.manager.js'

export class UserMariaDbDao extends MariaDbManager {
  constructor (options, tableName) {
    super(options, tableName)
  }
}
