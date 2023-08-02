import { useState, useEffect } from 'react'
import { config } from '../../../config/config'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { sendRequest } from '../../../services/apiRequest.generator'

const MentoryUpdate = props => {
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

  const [mentoryToUpdate, setmentoryToUpdate] = useState([])
  const locationProp = useLocation()
  const mentoryId = locationProp.state

  const token = JSON.stringify(localStorage.getItem('token'))
  const URLGetById = `${config.REACT_APP_API_BASE_URL}mentories/${mentoryId}`
  if (mentoryId === null || token === null) {
    localStorage.removeItem('token')
    navigate('/login')
  }

  const getUserById = async () => {
    const dataNew = await sendRequest('GET', URLGetById, token)
    setmentoryToUpdate(dataNew)
    setTitle(dataNew.data.data.title)
    setDescription(dataNew.data.data.description)
    setArea(dataNew.data.data.area)
    setCapacity(dataNew.data.data.capacity)
    setClasses_quantity(dataNew.data.data.classes_quantity)
    setClasses_duration(dataNew.data.data.classes_duration)
    setModality(dataNew.data.data.modality)
    setLocation(dataNew.data.data.location)
    setTime(dataNew.data.data.time)
    // setFecha(dataNew.data.data.fecha)
    setDay(dataNew.data.data.day)
    return dataNew
  }

  useEffect(() => {
    getUserById().then(mentory => {
      setmentoryToUpdate(mentory)
    })
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const putInfo = {
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
      const URLPUT = `${config.REACT_APP_API_BASE_URL}mentories/${mentoryId}`
      sendRequest('PUT', URLPUT, token, putInfo)
    } catch (error) {
      console.error(error)
    }
    navigate('../mentories/own')
  }
  return (
    <>
      <div className='update-mentory-container'>
        <h2 className='title '>Modificar mentoría</h2>
        <form onSubmit={handleSubmit} className='form'>
          <label className='label' htmlFor='titulo'>
            Titulo
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
            required={true}
            resize='none'
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
            <option></option>
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
            onChange={e => setCapacity(e.target.value)}
          />

          <label htmlFor='cantClas'>Cantidad Clases</label>
          <input
            className='inputMentories'
            type='number'
            required={true}
            name='cantClas'
            value={classes_quantity}
            onChange={e => setClasses_quantity(e.target.value)}
          />

          <label htmlFor='duracion'>Duracion</label>
          <input
            className='inputMentories'
            type='number'
            required={true}
            name='duracion'
            value={classes_duration}
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
            }}
          >
            <option></option>
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
            onChange={e => {
              setLocation(e.target.value)
            }}
          />
          <div className='diaHorario'>
            <label htmlFor='dia'>Día:</label>
            <select
              required={false}
              type='text'
              name='dia'
              value={day}
              onChange={e => {
                setDay(e.target.value)
              }}
            >
              <option></option>
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
          {/* <label htmlFor='fecha'>Fecha</label>
                    <input required={false}
                        type='text'
                        name='fecha'
                        value={fecha}
                        onChange={e => {
                            setFecha(e.target.value)
                        }} /> */}

          <button type='submit' className='update-mentory-btn'>
            Modificar mentoría
          </button>
        </form>
      </div>
    </>
  )
}
export default MentoryUpdate
