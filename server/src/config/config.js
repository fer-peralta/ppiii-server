import * as dotenv from 'dotenv'

dotenv.config()

export const config = {
  DB_MONGO_CLOUD: process.env.DB_MONGO_CLOUD,
  DB_MONGO_LOCAL: process.env.DB_MONGO_LOCAL,
  DB_SETUP: process.env.DB_SETUP,
  PORT: process.env.PORT,
  DBTYPE: process.env.DBTYPE,
  ADMIN_GMAIL_ACCOUNT: process.env.ADMIN_GMAIL,
  ADMIN_GMAIL_PASSWORD: process.env.PASSWORD_GMAIL,
  DEFAULT_USER_STATE: process.env.DEFAULT_USER_STATE,
  APP_MODE: process.env.APP_MODE
}
