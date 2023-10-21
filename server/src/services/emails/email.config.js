import { createTransport } from 'nodemailer'
import { config } from '../../config/config.js'

export const emailAdmin = config.ADMIN_GMAIL_ACCOUNT
const passwordAdmin = config.ADMIN_GMAIL_PASSWORD

export const transporterEmail = createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: emailAdmin,
    pass: passwordAdmin
  },
  secure: false,
  tls: {
    rejectUnauthorized: false
  }
})
