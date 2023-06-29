import Mentory from '../Mentory/Mentory'
const MentoryList = ({ mentories, getData }) => {
  return (
    <div className='mentoryList'>
      {getData?.map(mentory => (
        <Mentory key={mentory._id} mentory={mentory} />
      ))}
    </div>
  )
}

export default MentoryList
