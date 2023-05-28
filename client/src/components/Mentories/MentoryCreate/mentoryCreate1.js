import { useState } from 'react'
import './MentoryCreate.css'
import { config } from '../../../config/config'
import { Link } from 'react-router-dom'

const MentoryCreate1 = () => {
    // const [author, setAuthor] = useState('')
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
    const [dia, setDia] = useState('')


    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const Post = {
                // author,
                title, description, area, capacity, classes_quantity, classes_duration, modality, location
                , time, dia
                // fecha

            }
            const URL = `${config.REACT_APP_API_BASE_URL}mentories`
            const token = JSON.stringify(localStorage.getItem('token'))

            const options = {
                method: 'POST',
                body: JSON.stringify(Post),
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            await fetch(URL, options).then(resp => {
                resp.json().then(data => {
                    console.log(data)
                })
            })


        } catch (error) {
            console.error(error)
        }

    }
    return (

        <>
            <Link to='../mentories'>Volver</Link>
            <div className='contenedorLogin'>
                <form onSubmit={handleSubmit} className='form'>
                    <h2 className='title '>Mentories</h2>
                    <label className='label' htmlFor='titulo'>
                        Titulo
                    </label>
                    <input
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
                        required={true}
                        type='text'
                        name='area'
                        value={area}
                        onChange={e => {
                            setArea(e.target.value)
                        }} >
                        <option>Análisis de Sistemas</option>
                        <option>Seguridad e Higiene</option>
                        <option>General</option>

                    </select>


                    <label htmlFor='cantAlum'>Cantidad Alumnos</label>
                    <input
                        type='number'
                        required={true}
                        name='cantAlum'
                        value={capacity}
                        onChange={e => setCapacity(e.target.value)}
                    />

                    <label htmlFor='cantClas'>Cantidad Clases</label>
                    <input
                        type='number'
                        required={true}
                        name='cantClas'
                        value={classes_quantity}
                        onChange={e => setClasses_quantity(e.target.value)}
                    />

                    <label htmlFor='duracion'>Duracion</label>
                    <input
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
                        type='text'
                        required={true}
                        name='modalidad'
                        minLength={10}
                        value={modality}
                        onChange={e => {
                            setModality(e.target.value)

                        }}>
                        <option>Presencial</option>
                        <option>Virtual</option>
                        <option>Asincrónica</option>
                    </select>
                    <label htmlFor='ubicación'>Ubicación</label>
                    <input required={true}
                        type='text'
                        name='ubicación'
                        value={location}
                        onChange={e => {
                            setLocation(e.target.value)
                        }} />
                    <label htmlFor='horario'>Horario</label>
                    <input required={true}
                        type='time'
                        name='horario'
                        value={time}
                        onChange={e => {
                            setTime(e.target.value)
                        }} />
                    {/* <label htmlFor='fecha'>Fecha</label>
                    <input required={false}
                        type='text'
                        name='fecha'
                        value={fecha}
                        onChange={e => {
                            setFecha(e.target.value)
                        }} /> */}
                    <label htmlFor='dia'>Día</label>
                    <select required={false}
                        type='text'
                        name='dia'
                        value={dia}
                        onChange={e => {
                            setDia(e.target.value)
                        }}  >
                        <option>Lunes</option>
                        <option>Martes</option>
                        <option>Míercoles</option>
                        <option>Jueves</option>
                        <option>Viernes</option>
                        <option>Sábado</option>
                        <option>Domingo</option>
                    </select>

                    <button type='submit' className='submit'>
                        Registrar mentoria
                    </button>
                </form>
            </div>
        </>
    )
}
export default MentoryCreate1