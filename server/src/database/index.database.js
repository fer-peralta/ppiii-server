import { options } from "../config/db.config.js"
import { logInfo } from "../logs/logger.js"
import { MongoClient } from "./clients/mongo.client.js"

import { UserModel } from "./models/user.model.js"

export const getApiDao = async (dbType) => {

    let UserDaoContainer

    logInfo.info(`${dbType} database was selected`)

    switch (dbType) {
        case "MONGO":
            const client = new MongoClient()
            await client.connect()
            const { UserMongoDao } = await import("./daos/users/user.dao.mongo.js")
            UserDaoContainer = new UserMongoDao(UserModel)
            break
        case "MYSQL":
            break
    }
    return { UserDaoContainer }
}