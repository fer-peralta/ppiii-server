import knex from 'knex'

export class MariaDbManager {
  constructor (options, tableName) {
    this.database = knex(options)
    this.tableName = tableName
  }

  async getAll () {
    try {
      const data = await this.database.from(this.tableName).select('*')
      const results = data.map(elm => ({ ...elm }))
      return results
    } catch (error) {
      return `Hubo un error ${error}`
    }
  }

  async saveData (body) {
    try {
      const [id] = await this.database.from(this.tableName).insert(body)
      return `new element saved with id: ${id}`
    } catch (error) {
      return `Hubo un error ${error}`
    }
  }

  async getById (id) {
    try {
      const data = await this.database.from(this.tableName).where('id', id)
      return data
    } catch (error) {
      return `Hubo un error ${error}`
    }
  }
  async updateById (id, body) {
    try {
      const exist = await this.database.from(this.tableName).where('id', id)
      if (exist.length > 0) {
        await this.database.from(this.tableName).where('id', id).update(body)
        const data = await this.database.from(this.tableName).where('id', id)
        return data
      } else {
        return { message: `There was an error, id ${id} not found` }
      }
    } catch (error) {
      return `Hubo un error ${error}`
    }
  }
  async deleteById (id) {
    try {
      const exist = await this.database.from(this.tableName).where('id', id)
      console.log(exist)
      if (exist.length > 0) {
        await this.database.from(this.tableName).where('id', id).delete()
        return { message: 'File deleted successfuly' }
      } else {
        return { message: `There was an error, id ${id} not found` }
      }
    } catch (error) {
      return `Hubo un error ${error}`
    }
  }
}
