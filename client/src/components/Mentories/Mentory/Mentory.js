import './Mentory.css'
import { Link } from 'react-router-dom'
import { config } from '../../../config/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Mentory = ({ mentory }) => {
  const specificWebPage = window.location.href

  let prevUrl = document.referrer

  console.log(prevUrl)

  const mentoryOwnEdit = () => {
    if (specificWebPage == 'http://localhost:3000/mentories/own') {
      return (
        <div className='botones1'>
          <Link
            to={`/mentories/update`}
            state={mentoryId}
            className='submit1 mentory-own'
          >
            Editar
          </Link>
          <button
            type='submit'
            className='submit1 mentory-own'
            onClick={() => handleDelete(mentory._id)}
            style={{ backgroundColor: 'red' }}
          >
            Eliminar
          </button>
        </div>
      )
    }
  }

  const mentoryId = mentory._id

  const level = () => {
    if (mentory.level) {
      return mentory.level
    } else {
      return ''
    }
  }

  const year_career = () => {
    if (mentory.year_career) {
      return `${mentory.year_career}° año`
    } else {
      return ''
    }
  }

  const date_specific = () => {
    if (mentory.date_specific) {
      return mentory.date_specific
    } else {
      return ''
    }
  }

  const URL = `${config.REACT_APP_API_BASE_URL}mentories/`
  const token = JSON.stringify(localStorage.getItem('token'))

  const handleDelete = async e => {
    try {
      const options = {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
      const response = await fetch(`${URL}${mentory._id}`, options).then(resp =>
        resp.json()
      )
      window.location.reload().catch(error => console.log(error))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div>
        <div className='card'>
          <div className='header'>{mentory.area}</div>
          <div className='body'>
            <div className='contenedorImg'>
              <img
                style={{
                  width: '60px',
                  height: '60px',
                  margin: 'auto'
                }}
                src={mentory.avatar}
                alt={mentory.title}
              />
            </div>
            <div className='skill'>
              <h3>Autor: </h3>
              <span>&nbsp;{mentory.author}</span>
            </div>
            <div className='skill'>
              <h4>Título: </h4> <span>&nbsp;{mentory.title}</span>
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
                {mentory.description}
              </span>
            </div>
            <div className='skill'>
              <h4>Cantidad de alumnos:</h4>&nbsp;
              <span>{mentory.capacity}</span>
            </div>
            <div className='skill'>
              <h4>Cantidad de clases:</h4>&nbsp;
              <span>{mentory.classes_quantity}</span>
            </div>
            <div className='skill'>
              <h4>Duración de la clase:</h4>&nbsp;
              <span> {mentory.classes_duration} horas</span>
            </div>
            <div className='skill'>
              <h4>Modalidad:</h4>&nbsp;
              <span> {mentory.modality}</span>
            </div>
            <div className='skill'>
              <h4>Ubicación:</h4>&nbsp;
              <span> {mentory.location}</span>
            </div>
            <div className='skill'>
              <h4>Horario:</h4>&nbsp;
              <span> {mentory.time}</span>
            </div>
            <div className='skill'>
              <h4>Día:</h4>&nbsp;
              <span> {mentory.day}</span>
            </div>
            {mentoryOwnEdit()}
          </div>
        </div>
      </div>
    </>
  )
}

export default Mentory
