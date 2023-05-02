import './UserProfile.css'
import { Link } from 'react-router-dom'
const Profile = ({ user }) => {

    return <div className="user">

        <div className="right">

            <p>Bienvenido ....</p>
            <Link to='/login' className='submitR'>Cerrar sesion</Link>
        </div>
    </div>
}

export default Profile;