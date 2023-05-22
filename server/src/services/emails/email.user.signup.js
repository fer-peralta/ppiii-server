import { transporterEmail } from './email.config.js'
import { emailAdmin } from './email.config.js'
import { logError, logInfo } from '../../logs/logger.js'

export const signUpMail = user => {
  transporterEmail.sendMail(
    {
      from: `Voluntarios Beltrán <${emailAdmin}>`,
      to: emailAdmin,
      subject: 'Nuevo registro',
      text: `El usuario ${user.name} ${user.surname} se registró exitosamente con el email ${user.email}`
    },
    (error, response) => {
      if (error) {
        logError.error('There was an error sending the mail', error)
      } else {
        logInfo.info(
          'An email with the user information was sended to the Admin'
        )
      }
    }
  )
}
