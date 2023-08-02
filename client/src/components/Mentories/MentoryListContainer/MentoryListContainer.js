import { useState, useEffect } from 'react'
import MentoryList from '../MentoryList/MentoryList'
import { CategoryFilter } from '../CategoryFilter/CategoryFilter'
import { config } from '../../../config/config'
import { useNavigate } from 'react-router-dom'
import { sendRequest } from '../../../services/apiRequest.generator'

const MentoryListContainer = () => {
  const [mentories, setMentories] = useState([])
  const navigate = useNavigate()
  const URL = `${config.REACT_APP_API_BASE_URL}mentories`
  const token = JSON.stringify(localStorage.getItem('token'))

  const [getData, setGetData] = useState([])

  const getMentories = async () => {
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
    getMentories().then(mentories => {
      setMentories(mentories)
    })
  }, [])

  return (
    <div className='mentory-list-container'>
      <h1>Mentorías disponibles</h1>
      <div className='mentories-and-filter-container'>
        {mentories.length > 0 ? (
          <CategoryFilter mentories={mentories} setGetData={setGetData} />
        ) : (
          <div></div>
        )}
        {mentories.length > 0 ? (
          <MentoryList mentories={mentories} getData={getData} />
        ) : (
          <h2>No hay mentorías creadas</h2>
        )}
      </div>
    </div>
  )
}

export default MentoryListContainer
