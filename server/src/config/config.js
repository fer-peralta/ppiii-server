import * as dotenv from "dotenv";

dotenv.config()

export const config = {
    DB_MONGO_CLOUD: process.env.DB_MONGO_CLOUD,
    DB_MONGO_LOCAL: process.env.DB_MONGO_LOCAL,
    DB_SETUP: process.env.DB_SETUP,
    PORT: process.env.PORT,
    DBTYPE: process.env.DBTYPE
}