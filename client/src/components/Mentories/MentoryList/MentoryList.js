import Mentory from '../Mentory/Mentory'
import './MentoryList.scss'
const MentoryList = ({ mentories, getData }) => {
  return (
    // <div className='contenedorCards'>
    <div className='mentoryList'>
      {getData?.map(mentory => (
        <Mentory key={mentory._id} mentory={mentory} />
      ))}
    </div>
    // <div className='mentoryList'>
    //   {mentories?.map(mentory => (
    //     <Mentory key={mentory._id} mentory={mentory} />
    //   ))}
    // </div>
    // </div>
  )
}

export default MentoryList
