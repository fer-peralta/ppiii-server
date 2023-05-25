import Mentory from '../Mentory/Mentory'
import './MentoryOwnList.css'

const MentoryOwnList = ({ mentories }) => {
    return (
        <ul className='itemList'>
            {mentories?.map(mentory => (
                <Mentory key={mentory._id} mentory={mentory} />
            ))}
        </ul>
    )
}

export default MentoryOwnList