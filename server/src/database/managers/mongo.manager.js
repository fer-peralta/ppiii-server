import { logInfo, logError, logWarn } from '../../logs/logger.js'
export class MongoManager {
  constructor (model) {
    this.model = model
  }

  async saveData (data) {
    try {
      const object = await this.model.create(data)
      return {
        message: `New document was saved`,
        id: object.id,
        email: object.email
      }
    } catch (error) {
      logError.error({
        message: `There was an error saving the document`,
        error: error
      })
      return { message: `There was an error saving the document`, error: error }
    }
  }

  async getAll () {
    try {
      const response = await this.model.find()
      const data = JSON.parse(JSON.stringify(response))
      return data
    } catch (error) {
      logError.error({
        message: `There was an error getting the documents ${error}`,
        error: true
      })
      return {
        message: `There was an error getting the documents ${error}`,
        error: true
      }
    }
  }

  async getById (id) {
    try {
      const documentToFind = await this.model.findById(id)
      if (!documentToFind) {
        throw `There was an error searching the id, not found`
      } else {
        return { message: `Document found succesfully`, data: documentToFind }
      }
    } catch (error) {
      logError.error({
        message: `There was an error searching the document`,
        id: id,
        error: error
      })
      return {
        message: `There was an error searching the document`,
        id: id,
        error: error
      }
    }
  }

  async updateById (id, body) {
    try {
      const { data, error } = await this.getById(id)
      if (error) {
        throw error
      }
      if (data) {
        await this.model.findByIdAndUpdate(id, body)
        const { data, error } = await this.getById(id)
        if (error) {
          throw error
        }
        return { message: 'Document updated successfully', data }
      }
    } catch (error) {
      logError.error({
        message: `There was an error updating the document: ${error}`,
        id: id,
        error: true
      })
      return {
        message: `There was an error updating the document: ${error}`,
        id: id,
        error: true
      }
    }
  }

  async deleteById (id) {
    try {
      const documentToDelete = await this.model.findById(id)
      if (documentToDelete) {
        await this.model.findByIdAndDelete(id)
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

  async deleteLogicById (id) {
    try {
      const documentToDelete = await this.model.findById(id)
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

  async deleteAll () {
    try {
      await this.model.deleteMany()
      return { message: `All the documents were deleted` }
    } catch (error) {
      logError.error({
        message: `There was an error deleting the documents`,
        error: error
      })
      return {
        message: `There was an error deleting the documents`,
        error: error
      }
    }
  }
}
