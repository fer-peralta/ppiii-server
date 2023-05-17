import Mentory from '../Mentory/Mentory'

const MentoryList = ({ mentories }) => {
  return (
    <ul className='itemList'>
      {mentories?.map(mentory => (
        <Mentory key={mentory._id} mentory={mentory} />
      ))}
    </ul>
  )
}

export default MentoryList
