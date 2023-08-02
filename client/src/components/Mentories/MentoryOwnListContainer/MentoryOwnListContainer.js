import { useState, useEffect } from 'react'
import MentoryOwnList from '../MentoryOwnList/MentoryOwnList'
import { config } from '../../../config/config'
import { sendRequest } from '../../../services/apiRequest.generator'
import { useNavigate } from 'react-router-dom'

const MentoryOwnListContainer = () => {
  const [mentories, setMentories] = useState([])
  const navigate = useNavigate()
  const URL = `${config.REACT_APP_API_BASE_URL}mentories/own`
  const token = JSON.stringify(localStorage.getItem('token'))

  const getOwnMentories = async () => {
    const response = await sendRequest('GET', URL, token)
    if (response.error) {
      localStorage.removeItem('token')
      navigate('/login')
    }
    const mentoriesGet = response.data.map(ment => {
      const data = ment
      return { _id: ment._id, ...data }
    })
    setMentories(mentoriesGet)
    return mentoriesGet
  }

  useEffect(() => {
    getOwnMentories().then(mentories => {
      setMentories(mentories)
    })
  }, [])

  console.log(mentories)

  return (
    <div className='mentory-own-list-container'>
      <h1>Mis mentorías</h1>
      {mentories.length > 0 ? (
        <MentoryOwnList mentories={mentories} />
      ) : (
        <h2>No hay mentorías creadas</h2>
      )}
    </div>
  )
}

export default MentoryOwnListContainer
