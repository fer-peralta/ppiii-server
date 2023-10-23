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
  secure: true,
  tls: {
    rejectUnauthorized: false
  }
})

transporterEmail.verify(function (error, success) {
  if (error) {
    console.log(error)
  } else {
    console.log('Server is ready to take our messages')
  }
})
