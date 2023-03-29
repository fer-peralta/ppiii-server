import * as dotenv from "dotenv";

dotenv.config()

export const config = {
    DB_MONGO: process.env.DB_MONGO,
    PORT: process.env.PORT,
    DBTYPE: process.env.DBTYPE
}