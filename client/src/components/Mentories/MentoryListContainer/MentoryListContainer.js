import './MentoryListContainer.scss'
import { useState, useEffect } from 'react'
import MentoryList from '../MentoryList/MentoryList'
import { CategoryFilter } from '../CategoryFilter/CategoryFilter'
import { config } from '../../../config/config'
import { options } from './MentoryListContainer.fetchOptions'
import { useNavigate } from 'react-router-dom'

const MentoryListContainer = () => {
  const [mentories, setMentories] = useState([])
  const navigate = useNavigate()
  const URL = `${config.REACT_APP_API_BASE_URL}mentories`
  const token = JSON.stringify(localStorage.getItem('token'))

  const [getData, setGetData] = useState([])

  const getUsers = async () => {
    const response = await fetch(URL, options(token))
    response.status === 403 && navigate('/')
    const dataNew = await response.json()
    const mentoriesGet = dataNew.data.map(ment => {
      const data = ment
      return { _id: ment._id, ...data }
    })
    setMentories(mentoriesGet)
    return mentoriesGet
  }

  useEffect(() => {
    getUsers().then(mentories => {
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
