import './UserProfile.css'
//import { Link } from 'react-router-dom'
//import { useState } from 'react';
import { useQuery } from 'react-query'

const Profile = () => {
    //const [user, setUser] = useState(null);

    const url1 = 'http://localhost:8080/api/users/profile'

    const getUsers = async () => {
        const response = await fetch(url1);

        return response.json();
    }
    const { data, status } = useQuery('users', getUsers)
    //console.log(user)

    if (status === 'loading') {
        return <p>Recuperando los users...</p>;
    }

    if (status === 'error') {
        return <p>Error</p>;
    }

    return <div className="user">

        <div className="right">

            <p>Bienvenido {data.message}</p>
            {/* <Link to='/' className='submitR'>Cerrar sesion</Link> */}
        </div>
    </div>
}

export default Profile;