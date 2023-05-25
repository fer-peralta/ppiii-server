import { useEffect, useState } from 'react'
import './UserProfile.css'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { config } from '../../../config/config'

const Profile = () => {
  const [logout, setLogout] = useState(false)
  const navigate = useNavigate()

  const handleLogOut = async () => {
    window.localStorage.removeItem('token')
    setLogout(true)
  }

  const handleLink = async () => {
    navigate('/mentories')
  }


  useEffect(() => {
    if (logout === true) {
      setTimeout(() => {
        navigate('/')
      }, '500')
    }
  }, [navigate, logout])

  const URL = `${config.REACT_APP_API_BASE_URL}session/profile`
  const token = JSON.stringify(localStorage.getItem('token'))

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  const getUsers = async () => {
    const response = await fetch(URL, options)
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
    <>

      <h1>Bienvenido a tu perfil</h1>
      <div className='contenedor'>
        <div className='user'>
          <img className='imgAvatar' src={data.User.avatar} alt='avatar' />
          <h2>
            {data.User.name.toUpperCase()} {data.User.surname.toUpperCase()}
          </h2>

        </div>
      </div>

      <button onClick={handleLogOut} className='submitR'>
        Cerrar sesion
      </button>
    </>
  )
}

export default Profile
