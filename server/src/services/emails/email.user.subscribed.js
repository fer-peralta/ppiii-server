import { config } from '../../config/config.js'
import { transporterEmail } from './email.config.js'
import { emailAdmin } from './email.config.js'
import { logError, logInfo } from '../../logs/logger.js'

export const newSubscriptionMail = (user, mentory) => {
  let authorEmail = ''
  let subscriberEmail = ''
  let date = ''
  if (config.APP_MODE == 'development') {
    authorEmail = emailAdmin
    subscriberEmail = emailAdmin
  } else {
    authorEmail = mentory.author
    subscriberEmail = emailAdmin
  }
  if (mentory.date_specific != undefined) {
    date = mentory.date_specific
  }
  transporterEmail.sendMail(
    {
      from: `Voluntarios Beltrán <${emailAdmin}>`,
      to: authorEmail,
      subject: 'Nueva inscripción a tu curso',
      text: `El usuario ${user.name} ${user.surname} con el email ${user.email} se inscribió exitosamente a tu mentoría de ${mentory.title}.\n
              Cualquier consulta puedes enviarnos un correo.\n
              \n
              Voluntarios Beltrán.`
    },
    (error, response) => {
      if (error) {
        logError.error('There was an error sending the mail', error)
      } else {
        logInfo.info(
          'An email with the user subscription was sended to the author of the mentory'
        )
      }
    }
  )
  transporterEmail.sendMail(
    {
      from: `Voluntarios Beltrán <${emailAdmin}>`,
      to: subscriberEmail,
      subject: 'Te inscribiste al curso con éxito',
      text: `Te inscribiste exitosamente al curso de ${mentory.title}.\n
              Recuerda que comienza el ${mentory.day} ${date} a las ${mentory.time} horas.\n
              Cualquier consulta no dudes en enviarnos un correo.\n\n
              Voluntarios Beltrán.
              `
    },
    (error, response) => {
      if (error) {
        logError.error('There was an error sending the mail', error)
      } else {
        logInfo.info('An email with the susbcription was sended to the student')
      }
    }
  )
}
