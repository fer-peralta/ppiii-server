import { dbOptions } from "../config/db.config.js"
import { logInfo, logError, logWarn } from "../logs/logger.js"
import knex from "knex"

const database = knex(dbOptions.mariaDB)

// * If the table products doesn't exist, it creates it
const createTable = async () => {
    const users = await database.schema.hasTable("users")

    if (users) {
        await database.schema.dropTable("users")
            .then(() => logWarn.warn("Table users was dropped"))
            .finally(() => database.destroy())
    }
    else {
        await database.schema.createTable("users", table => {
            table.increments("id").nullable(false)
            table.string("username", 30).nullable(false)
            table.string("password", 30).nullable(false)
            table.string("name", 50).nullable(false)
            table.integer("age").nullable(false)
            table.string("adress", 30).nullable(false)
            table.string("phone", 30).nullable(false)
            table.string("avatar", 200).nullable(false)
            table.string("state", 15).nullable(false).defaultTo("active")
        }).then(() => logInfo.info("Table users created"))
            .catch(error => logError.error({ message: "There was an error creating the table Users", error: error }))
            .finally(() => database.destroy())
    }
}

createTable()