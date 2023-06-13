import Mentory from '../Mentory/Mentory'
import './MentoryOwnList.scss'

const MentoryOwnList = ({ mentories }) => {
  return (
    <ul>
      {mentories?.map(mentory => (
        <Mentory key={mentory._id} mentory={mentory} />
      ))}
    </ul>
  )
}

export default MentoryOwnList
