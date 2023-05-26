import './Mentory.css'

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
            <button type='submit' className='submit' style={{ backgroundColor: 'red' }}>
              eliminar
            </button>
            <button type='submit' className='submit'>
              Modificar
            </button>
          </div>
        </div >
      </div>

    </>
  )
}

export default Mentory
