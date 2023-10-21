import { transporterEmail } from './email.config.js'
import { emailAdmin } from './email.config.js'
import { logError, logInfo } from '../../logs/logger.js'
import { config } from '../../config/config.js'

export const confirmMail = (user, token) => {
  console.log(user)
  let userEmail = ''
  if (config.APP_MODE == 'development') {
    userEmail = emailAdmin
  } else {
    userEmail = user.email
  }
  console.log(userEmail)
  console.log(config.APP_MODE)
  transporterEmail.sendMail(
    {
      from: `Voluntarios Beltrán <${emailAdmin}>`,
      to: userEmail,
      subject: 'Nuevo registro - Por favor confirma tu cuenta',
      html: confirmEmailTemplate(user.name, user.surname, token)
    },
    (error, response) => {
      if (error) {
        console.log('salio mal', error)
        logError.error('There was an error sending the mail', error)
      } else {
        console.log('salio bien')
        logInfo.info(
          'An email for the sign up confirmation was sended to the user'
        )
      }
    }
  )
}

const confirmEmailTemplate = (name, surname, token) => {
  const URL = `${config.REACT_APP_FRONT_BASE_URL}`

  return `
        <head>
            <link rel="stylesheet" href="./style.css">
        </head>
        
        <div id="email___content">
            <img src="" alt="Voluntarios Beltrán">
            <h2>Hola ${name} ${surname}</h2>
            <p>Para confirmar tu cuenta, ingresá al siguiente enlace</p>
            <a href="${URL}confirm/${token}" target="_blank">
              Confirmar Cuenta 
            </a>
        </div>
      `
}
