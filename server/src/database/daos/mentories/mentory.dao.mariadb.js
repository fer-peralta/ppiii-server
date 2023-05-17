import { MariaDbManager } from '../../managers/mariaDb.manager.js'

export class MentoryMariaDbDao extends MariaDbManager {
  constructor (options, tableName) {
    super(options, tableName)
  }
}
