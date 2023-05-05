//import { useFetch } from '../../services/fetch.generator';
import './UserProfile.css'
//import { Link } from 'react-router-dom'


const Profile1 = () => {

    const url1 = 'http://localhost:8080/api/users/profile'

    const { data } = useFetch(url1);



    return <div className="user">

        <div className="right">

            <p>Bienvenido {data.user.name} {data.user.surname} </p>
            {/* <Link to='/' className='submitR'>Cerrar sesion</Link> */}
        </div>
    </div>
}

export default Profile1;