import './UserCard.css'
const UserCard = ({ user }) => {
    return <div className="user">

        <div className="right">
            <p>Nombre:{user.name}</p>
            <p>Apellido:{user.username}</p>
            <p>edad: {user.age}</p>
            <p>adress: {user.adress}</p>
        </div>
    </div>
}

export default UserCard;