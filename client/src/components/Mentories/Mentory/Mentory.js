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
    <li>
      <table className='mentory_card'>
        <tbody className='mentory_card'>
          <tr className='mentory_card_header'>
            <td>
              <img src={mentory.avatar} alt={mentory.title} />
            </td>
            <td>
              <h3>{mentory.title}</h3>
              <p>{mentory.author}</p>
            </td>
          </tr>
          <tr>
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
              <p>{mentory.location}</p>
            </td>
            <td>
              <p>Horario: {mentory.time}</p>
            </td>
            <td>
              <p>{date_specific}</p>
            </td>
            <td>
              <p>Día: {mentory.day}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </li>
  )
}

export default Mentory
