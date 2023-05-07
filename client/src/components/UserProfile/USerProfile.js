import './UserProfile.css'
import { useQuery } from 'react-query'

const Profile = () => {
  const url1 = 'http://localhost:8080/api/session/profile'

  const token = JSON.stringify(localStorage.getItem('token'))

  console.log(token)

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  const getUsers = async () => {
    const response = await fetch(url1, options)
    return response.json()
  }
  const { data, status } = useQuery('users', getUsers)

  if (status === 'loading') {
    return <p>Recuperando los users...</p>
  }

  if (status === 'error') {
    return <p>Error</p>
  }

  return (
    <div className='user'>
      <div className='right'>
        <p>Bienvenido {data.User.email}</p>
        {/* <Link to='/' className='submitR'>Cerrar sesion</Link> */}
      </div>
    </div>
  )
}

export default Profile
