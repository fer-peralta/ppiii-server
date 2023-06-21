import { useState } from 'react'
import './MentoryCreate.css'
import { config } from '../../../config/config'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { options } from './MentoryCreate.fetchOptions'

const MentoryCreate = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [area, setArea] = useState('')
  const [capacity, setCapacity] = useState('')
  const [classes_quantity, setClasses_quantity] = useState('')
  const [classes_duration, setClasses_duration] = useState('')
  const [modality, setModality] = useState('')
  const [location, setLocation] = useState('')
  const [time, setTime] = useState('')
  //const [fecha, setFecha] = useState('')
  const [day, setDay] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const post = {
        title,
        description,
        area,
        capacity,
        classes_quantity,
        classes_duration,
        modality,
        location,
        time,
        day
        // fecha
      }
      const URL = `${config.REACT_APP_API_BASE_URL}mentories`
      const token = JSON.stringify(localStorage.getItem('token'))

      await fetch(URL, options(post, token)).then(resp => {
        resp.json().then(data => {
          navigate('../mentories/own')
        })
      })
    } catch (error) {
      console.error(error)
    }

    if (modality !== 'Presencial') {
      console.log(modality)
      setIsDisabled(true)
    }
  }
  return (
    <>
      <Link to='../mentories'>Volver</Link>
      <div className='contenedorLogin'>
        <form onSubmit={handleSubmit} className='form'>
          <h2 className='title '>Nueva mentoría</h2>
          <label className='label' htmlFor='titulo'>
            Título
          </label>
          <input
            className='inputMentories'
            required={true}
            type='text'
            name='titulo'
            value={title}
            onChange={e => {
              setTitle(e.target.value)
            }}
          />
          <label className='label' htmlFor='descripcion'>
            Descripcion
          </label>
          <textarea
            className='textArea'
            resize='none'
            required={true}
            type='text-area'
            name='descripcion'
            value={description}
            onChange={e => {
              setDescription(e.target.value)
            }}
          />
          <label className='label' htmlFor='area'>
            Area
          </label>
          <select
            className='select1'
            required={true}
            type='text'
            name='area'
            value={area}
            onChange={e => {
              setArea(e.target.value)
            }}
          >
            <option disabled={true}></option>
            <option>Análisis de Sistemas</option>
            <option>Seguridad e Higiene</option>
            <option>General</option>
          </select>

          <label htmlFor='cantAlum'>Cantidad Alumnos</label>
          <input
            className='inputMentories'
            type='number'
            required={true}
            name='cantAlum'
            value={capacity}
            min={0}
            max={10}
            onChange={e => setCapacity(e.target.value)}
          />

          <label htmlFor='cantClas'>Cantidad Clases</label>
          <input
            className='inputMentories'
            type='number'
            required={true}
            name='cantClas'
            value={classes_quantity}
            min={0}
            onChange={e => setClasses_quantity(e.target.value)}
          />

          <label htmlFor='duracion'>Duracion (horas)</label>
          <input
            className='inputMentories'
            type='number'
            required={true}
            name='duracion'
            value={classes_duration}
            min={0}
            max={4}
            onChange={e => {
              setClasses_duration(e.target.value)
            }}
          />

          <label htmlFor='modalidad'>Modalidad</label>
          <select
            className='select1'
            type='text'
            required={true}
            name='modalidad'
            minLength={10}
            value={modality}
            onChange={e => {
              setModality(e.target.value)
              if (e.target.value !== 'Presencial') {
                setLocation(e.target.value)
                setIsDisabled(true)
              } else {
                setIsDisabled(false)
                setLocation('')
              }
            }}
          >
            <option disabled={true}></option>
            <option>Presencial</option>
            <option>Virtual</option>
            <option>Asíncrona</option>
          </select>
          <label htmlFor='ubicación'>Ubicación</label>
          <input
            className='inputMentories'
            required={true}
            type='text'
            name='ubicación'
            value={location}
            disabled={isDisabled}
            onChange={e => {
              setLocation(e.target.value)
            }}
          />
          <div className='diaHorario'>
            <label htmlFor='dia'>Día:</label>
            <select
              className='selectDia'
              required={false}
              type='text'
              name='dia'
              value={day}
              onChange={e => {
                setDay(e.target.value)
              }}
            >
              <option disabled={true}></option>
              <option>Lunes</option>
              <option>Martes</option>
              <option>Míercoles</option>
              <option>Jueves</option>
              <option>Viernes</option>
              <option>Sábado</option>
              <option>Domingo</option>
            </select>

            <label htmlFor='horario'>Horario:</label>
            <input
              required={true}
              type='time'
              name='horario'
              value={time}
              onChange={e => {
                setTime(e.target.value)
              }}
            />
          </div>

          <button type='submit' className='submit'>
            Crear mentoria
          </button>
        </form>
      </div>
    </>
  )
}
export default MentoryCreate
