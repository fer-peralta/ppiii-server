import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { config } from '../../../config/config'
import { sendRequest } from '../../../services/apiRequest.generator'

const Profile = () => {
  const [logout, setLogout] = useState(false)
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()

  const URL = `${config.REACT_APP_API_BASE_URL}session/profile`
  const token = JSON.stringify(localStorage.getItem('token'))

  const getProfile = async () => {
    const response = await sendRequest('GET', URL, token)
    if (response.error) {
      localStorage.removeItem('token')
      navigate('/login')
    }
    return response
  }

  useEffect(() => {
    getProfile().then(profile => {
      setProfile(profile.user)
    })
  }, [])

  const handleLogOut = async () => {
    window.localStorage.removeItem('token')
    setLogout(true)
  }

  useEffect(() => {
    if (logout === true) {
      setTimeout(() => {
        navigate('/')
      }, '500')
    }
  }, [navigate, logout])

  return (
    <>
      <div className='profile-container'>
        <h1 className='profile-title'>Mi perfil</h1>
        <div className='profile-data-container'>
          <div className='user'>
            <img className='profileAvatar' src={profile.avatar} alt='avatar' />
            <h2>
              {profile.name?.toUpperCase()} {profile.surname?.toUpperCase()}
            </h2>
            <input value={profile.email} readOnly={true} />
            <input value={profile.adress} readOnly={true} />
            <input value={`${profile.age} años`} readOnly={true} />
            <input value={profile.phone} readOnly={true} />
            {profile?.gender && (
              <input value={profile.gender} readOnly={true} />
            )}
          </div>
        </div>
        <button onClick={handleLogOut} className='logout-btn'>
          Cerrar sesión
        </button>
      </div>
    </>
  )
}

export default Profile
