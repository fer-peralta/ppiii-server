import './UserCard.css'
const UserCard = ({ user }) => {
    return <div className="user">

        <div className="right">
            <p>ID:{user._id}</p>
            <p>Nombre:{user.name}</p>
            <p>Apellido:{user.username}</p>
            <p>edad: {user.age}</p>
            <p>adress: {user.adress}</p>
            <img src={user.avatar} alt='avatar' />
        </div>
    </div>
}

export default UserCard;