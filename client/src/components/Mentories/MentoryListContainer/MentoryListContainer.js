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
    if (
      response.status === 400 ||
      response.status === 401 ||
      response.status === 403
    ) {
      navigate('/')
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
        <CategoryFilter mentories={mentories} setGetData={setGetData} />
        <MentoryList mentories={mentories} getData={getData} />
      </div>
    </div>
  )
}

export default MentoryListContainer
