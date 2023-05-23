import './MentoryCreate.css'
import { Link } from 'react-router-dom'

const MentoryCreate = () => {
  return (
    <>
      <Link to='../mentories'>Volver</Link>
      <form>
        <label>Título</label>
        <input type='text' />
        <label>Descripción</label>
        <input type='text-area' />
        <label>Área</label>
        <select>
          <option>Análisis de Sistemas</option>
        </select>
        <label>Cantidad de alumnos</label>
        <input type='number' />
        <label>Cantidad de clases</label>
        <input type='number' />
        <label>Minutos de clase</label>
        <input type='number' />
        <label>Modalidad</label>
        <select>
          <option>Presencial</option>
          <option>Virtual</option>
          <option>Asincrónica</option>
        </select>
        <label>Ubicación</label>
        <input type='text' />
        <label>Horario</label>
        <input type='time' />
        <label>Fecha</label>
        <input type='date' />
        <label>Día</label>
        <select>
          <option>Lunes</option>
          <option>Martes</option>
          <option>Míercoles</option>
          <option>Jueves</option>
          <option>Viernes</option>
          <option>Sábado</option>
          <option>Domingo</option>
        </select>
      </form>
    </>
  )
}

export default MentoryCreate
