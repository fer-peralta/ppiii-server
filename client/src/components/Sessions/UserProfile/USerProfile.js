import { useEffect, useState } from 'react'
import './UserProfile.scss'
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
    response.status === 403 && navigate('/')
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
      <div className='profile-container'>
        <h1 className='profile-title'>Mi perfil</h1>
        <div className='profile-data-container'>
          <div className='user'>
            <img
              className='profileAvatar'
              src={data.User.avatar}
              alt='avatar'
            />
            <h2>
              {data.User.name.toUpperCase()} {data.User.surname.toUpperCase()}
            </h2>
            <input value={data.User.email} readOnly={true} />
            <input value={data.User.adress} readOnly={true} />
            <input value={`${data.User.age} años`} readOnly={true} />
            <input value={data.User.phone} readOnly={true} />
            <input value={data.User.gender} readOnly={true} />
            {/* <p>{data.User.email}</p> */}
            {/* <p>{data.User.adress}</p> */}
            {/* <p>{data.User.age} años</p>
            <p>{data.User.phone}</p>
            <p>{data.User.gender}</p> */}
          </div>
        </div>
        <button onClick={handleLogOut} className='logout-btn'>
          Cerrar sesion
        </button>
      </div>
    </>
  )
}

export default Profile
