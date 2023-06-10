import './Mentory.css'
import { Link } from 'react-router-dom'
import { config } from '../../../config/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Mentory = ({ mentory }) => {
  const specificWebPage = window.location.href

  let prevUrl = document.referrer


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
  const mentorySubcription = () => {
    if (specificWebPage == 'http://localhost:3000/mentories') {
      return (

        <button
          type='submit'
          className='submit1 mentory-own'
          onClick={() => handleSubcription()}
          style={{ backgroundColor: 'grey' }}
        >
          Anotarse
        </button>

      )
    }
  }

  let mentoryId = mentory._id

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

  const handleSubcription = async e => {
    console.log(mentoryId)
    try {
      const Post = { mentoryId }
      const options = {
        method: 'POST',
        body: JSON.stringify(Post),
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
      const response = await fetch(`http://localhost:8080/api/users/subscriptions/`, options).then(resp =>
        resp.json()
          .then(console.log(mentoryId))
          .then()

      )
        .catch(error => console.log(error))
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
            {mentorySubcription()}
          </div>
        </div>
      </div>
    </>
  )
}

export default Mentory
