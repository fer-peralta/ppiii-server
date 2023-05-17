const Mentory = ({ mentory }) => {
  return (
    <li>
      <div className='mentory_card'>
        <img src={mentory.avatar} alt={mentory.title} />
        <h3>{mentory.title}</h3>
        <p>Mentor: {mentory.author}</p>
        <p>Descripción: {mentory.description}</p>
        <p>Carrera: {mentory.area}</p>
        <p>Nivel: {mentory.level}</p>
        <p>{mentory.year_career}° año</p>
        <p>Cantidad de alumnos: {mentory.capacity}</p>
        <p>Cantidad de clases: {mentory.classes_quantity}</p>
        <p>Duración de la clase: {mentory.classes_minutes}</p>
        <p>Modalidad: {mentory.modality}</p>
        <p>Ubicación: {mentory.location}</p>
        <p>Horario: {mentory.time}</p>
        <p>Fecha: {mentory.date_specific}</p>
        <p>Día: {mentory.day}</p>
      </div>
    </li>
  )
}

export default Mentory
