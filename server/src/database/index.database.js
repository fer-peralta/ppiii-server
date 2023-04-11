import { config } from "../config/config.js"
import { logInfo } from "../logs/logger.js"

export const getApiDao = async (dbType) => {

    let UserDaoContainer

    logInfo.info(`${dbType} database was selected`)
    logInfo.info(`${config.DB_SETUP} setup for the database was selected`)

    switch (dbType) {
        case "MONGO":
            const { MongoClient } = await import("./clients/mongo.client.js")
            const { UserModel } = await import("./models/user.model.js")
            const client = new MongoClient()
            await client.connect()
            const { UserMongoDao } = await import("./daos/users/user.dao.mongo.js")
            UserDaoContainer = new UserMongoDao(UserModel)
            break
        case "MYSQL":
            const { dbOptions } = await import("../config/db.config.js")
            const { UserMariaDbDao } = await import("./daos/users/user.dao.mariadb.js")
            UserDaoContainer = new UserMariaDbDao(dbOptions.mariaDB, "users")
            break
    }
    return { UserDaoContainer }
}