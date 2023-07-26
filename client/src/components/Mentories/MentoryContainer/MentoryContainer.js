import { useEffect, useState } from 'react'
import './MentoryContainer.css'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { config } from '../../../config/config'

const Profile = () => {
  const URL = `${config.REACT_APP_API_BASE_URL}mentories`
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
    return await response.json()
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
      <h1>Mentorías disponibles</h1>
      <div className='contenedor'>
        <div className='mentory'>
          <h2>{data.data[0].author}</h2>
          {/* <img className='imgAvatar' src={data.User.avatar} alt='avatar' />
          <h2>
            {data.User.name.toUpperCase()} {data.User.surname.toUpperCase()}
          </h2> */}
        </div>
      </div>
    </>
  )
}

export default Profile
