import { transporterEmail } from './email.config.js'
import { emailAdmin } from './email.config.js'
import { logError, logInfo } from '../../logs/logger.js'

export const confirmMail = (user, token) => {
  transporterEmail.sendMail(
    {
      from: `Voluntarios Beltrán <${emailAdmin}>`,
      to: emailAdmin,
      subject: 'Nuevo registro - Por favor confirma tu cuenta',
      html: confirmEmailTemplate(user.name, user.surname, token)
    },
    (error, response) => {
      if (error) {
        logError.error('There was an error sending the mail', error)
      } else {
        logInfo.info(
          'An email for the sign up confirmation was sended to the user'
        )
      }
    }
  )
}

const confirmEmailTemplate = (name, surname, token) => {
  return `
        <head>
            <link rel="stylesheet" href="./style.css">
        </head>
        
        <div id="email___content">
            <img src="" alt="Voluntarios Beltrán">
            <h2>Hola ${name} ${surname}</h2>
            <p>Para confirmar tu cuenta, ingresá al siguiente enlace</p>
            <a
                href="http://localhost:8080/api/session/confirm/${token}"
                target="_blank"
            >Confirmar Cuenta</a>
        </div>
      `
}
