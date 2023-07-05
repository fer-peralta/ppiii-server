import { useState, useEffect } from 'react'
import { config } from '../../../config/config'
import { deleteSubSuccessToast } from '../../../services/toastifyNotifications/notifications'
import { sendRequest } from '../../../services/apiRequest.generator'

const Subscription = ({ susbcription }) => {
  const [mentoryFound, setMentoryFound] = useState([])
  const URLGET = `${config.REACT_APP_API_BASE_URL}mentories/${susbcription.mentoryId}`
  const URLDELETE = `${config.REACT_APP_API_BASE_URL}users/subscriptions`
  const token = JSON.stringify(localStorage.getItem('token'))

  const getUsers = async () => await sendRequest('GET', URLGET, token)

  useEffect(() => {
    getUsers().then(mentoryFound => {
      setMentoryFound(mentoryFound.data)
    })
  }, [])

  const handleDeleteSubscription = async () => {
    try {
      const body = { mentoryId: susbcription.mentoryId }
      sendRequest('DELETE', URLDELETE, token, body)
      deleteSubSuccessToast()
      setTimeout(() => {
        window.location.reload()
      }, 1500)
    } catch (error) {
      console.error(error)
    }
  }

  // let mentoryId = mentory._id

  // const level = () => {
  //   if (mentory.level) {
  //     return mentory.level
  //   } else {
  //     return ''
  //   }
  // }

  // const year_career = () => {
  //   if (mentory.year_career) {
  //     return `${mentory.year_career}° año`
  //   } else {
  //     return ''
  //   }
  // }

  // const date_specific = () => {
  //   if (mentory.date_specific) {
  //     return mentory.date_specific
  //   } else {
  //     return ''
  //   }
  // }

  return (
    <>
      <div className='subscription-card'>
        <div className='subscription-card-header'>{mentoryFound.area}</div>
        <div className='subscription-card-body'>
          <div className='contenedorImg'>
            <img
              style={{
                width: '60px',
                height: '60px',
                margin: 'auto'
              }}
              src={mentoryFound.avatar}
              alt={mentoryFound.title}
            />
          </div>
          <div className='skill'>
            <h3>Autor: </h3>
            <span>&nbsp;{mentoryFound.author}</span>
          </div>
          <div className='skill'>
            <h4>Título: </h4> <span>&nbsp;{mentoryFound.title}</span>
          </div>
          <div className='skill1 description'>
            <h4>Descripción:</h4>
            <hr />
            <span
              style={{
                display: 'block',
                maxWidth: '250px',
                minHeight: '80px'
              }}
            >
              {mentoryFound.description}
            </span>
          </div>
          <div className='skill'>
            <h4>Cantidad de alumnos:</h4>&nbsp;
            <span>{mentoryFound.capacity}</span>
          </div>
          <div className='skill'>
            <h4>Cantidad de clases:</h4>&nbsp;
            <span>{mentoryFound.classes_quantity}</span>
          </div>
          <div className='skill'>
            <h4>Duración de la clase:</h4>&nbsp;
            <span> {mentoryFound.classes_duration} horas</span>
          </div>
          <div className='skill'>
            <h4>Modalidad:</h4>&nbsp;
            <span> {mentoryFound.modality}</span>
          </div>
          <div className='skill'>
            <h4>Ubicación:</h4>&nbsp;
            <span> {mentoryFound.location}</span>
          </div>
          <div className='skill'>
            <h4>Horario:</h4>&nbsp;
            <span> {mentoryFound.time}</span>
          </div>
          <div className='skill'>
            <h4>Día:</h4>&nbsp;
            <span> {mentoryFound.day}</span>
          </div>
          <button
            className='desinscription'
            onClick={() => {
              handleDeleteSubscription()
            }}
          >
            Desinscribirse
          </button>
        </div>
      </div>
    </>
  )
}

export default Subscription
