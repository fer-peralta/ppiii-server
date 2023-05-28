import './Mentory.css'
import { Link } from 'react-router-dom'
import { config } from '../../../config/config'

const Mentory = ({ mentory }) => {
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

  const handleDelete = async (e) => {

    try {
      // Construir el objeto de datos para la actualización del post
      const options = {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        } // O 'PATCH' si corresponde
      }

      // Hacer la solicitud PUT o PATCH a la API
      const response = await fetch(`${URL}${mentory._id}`, options)
        .then(resp => resp.json())
        .catch(error => console.log(error))

    } catch (error) {
      // Manejar errores, por ejemplo, mostrar un mensaje de error
      console.error(error);
    }
  };

  return (

    <>
      <div >
        <div className="card">
          <div className="header">{mentory.area}</div>
          <div className="body">
            <div className='contenedorImg'>
              <img style={{
                width: '60px', height: '60px',
                margin: 'auto'
              }} src={mentory.avatar} alt={mentory.title} />
            </div>
            <div className="skill">
              <h3>Autor : </h3> <span>{mentory.author}</span>

            </div>
            <div className="skill">
              <h4>Titulo :  </h4> <span>  {mentory.title}</span>
            </div>
            <div className="skill1">

              <h4>Descripcion:</h4>
              <hr />
              <span style={{ display: 'block', maxWidth: '250px', minHeight: '80px' }}>{mentory.description}</span>
            </div>
            <div className="skill">

              <h4>Cantidad de alumnos:  </h4><span>{mentory.capacity}</span>
            </div>
            <div className="skill">

              <h4>Cantidad de clases:  </h4><span>{mentory.classes_quantity}</span>
            </div>
            <div className="skill">
              <h4>Duración de la clase:</h4><span> {mentory.classes_minutes} minutos</span>
            </div>
            <div className="skill">
              <h4>Modalidad:</h4><span> {mentory.modality}</span>
            </div>
            <div className="skill">
              <h4>Ubicacion:</h4><span> {mentory.location}</span>
            </div>
            <div className="skill">
              <h4>Horario: </h4><span> {mentory.time}</span>
            </div>
            <div className="skill">
              <h4>Día: </h4><span> {mentory.day}</span>
            </div>
            <button
              type='submit'
              className='submit'
              onClick={() => handleDelete(mentory._id)}
              style={{ backgroundColor: 'red' }}>
              eliminar
            </button>
            <Link to={`/mentories/${mentory._id}`} className='submit'>Editar</Link>

          </div>
        </div >
      </div>

    </>
  )
}

export default Mentory
