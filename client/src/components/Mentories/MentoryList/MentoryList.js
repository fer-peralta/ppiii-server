import Mentory from '../Mentory/Mentory'
import './MentoryList.css'
const MentoryList = ({ mentories }) => {
  return (
    <div className="contenedorCards">
      <div className='itemList'>
        {mentories?.map(mentory => (
          <Mentory key={mentory._id} mentory={mentory} />
        ))}
      </div>
    </div>
  )
}

export default MentoryList
