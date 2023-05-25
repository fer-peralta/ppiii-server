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
      <div className="card">
        <div className="header">Mentoria</div>
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
          <div className="skill">
            <h4>Carrera :  </h4><span>{mentory.area}</span>
          </div>
          <div className="skill">

            <h4>Descripcion:</h4><span>{mentory.description}</span>
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


      <br></br>
      <hr></hr>
      <br></br>






      <li>
        <table className='mentory_card'>
          <tbody className='mentory_card'>
            <tr className='mentory_card_header'>
              <td>
                <img src={mentory.avatar} alt={mentory.title} />
                <p>Autor : {mentory.author}</p>
              </td>

            </tr>
            <tr>
              <td>
                <h3>Titulo : {mentory.title}</h3>
              </td>
              <td>
                <p>Carrera: {mentory.area}</p>
              </td>
              <td>
                <p>{year_career}</p>
              </td>
              <td>
                <p>{level}</p>
              </td>
            </tr>
            <tr>
              <p className='mentory_description'>{mentory.description}</p>
            </tr>
            <tr>
              <td>
                <p>Cantidad de alumnos: {mentory.capacity}</p>
              </td>
              <td>
                <p>Cantidad de clases: {mentory.classes_quantity}</p>
              </td>
              <td>
                <p>Duración de la clase: {mentory.classes_minutes}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Modalidad: {mentory.modality}</p>
              </td>
              <td>
                <p>Ubicacion: {mentory.location}</p>
              </td>
              <td>
                <p>Horario: {mentory.time}</p>
              </td>
              <td>
                <p>Dia : {date_specific}</p>
              </td>
              <td>
                <p>Día: {mentory.day}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </li>
    </>
  )
}

export default Mentory
