import Mentory from '../Mentory/Mentory'

const MentoryOwnList = ({ mentories }) => {
  return (
    <div className='mentory-own-list'>
      {mentories?.map(mentory => (
        <Mentory key={mentory._id} mentory={mentory} />
      ))}
    </div>
  )
}

export default MentoryOwnList
