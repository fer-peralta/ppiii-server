import { useState, useEffect } from 'react'
import MentoryOwnList from '../MentoryOwnList/MentoryOwnList'
import { config } from '../../../config/config'
import './MentoryOwnListContainer.scss'
import { options } from './MentoryOwnListContainer.fetchOptions'
import { useNavigate } from 'react-router-dom'

const MentoryOwnListContainer = () => {
  const [mentories, setMentories] = useState([])
  const navigate = useNavigate()
  const URL = `${config.REACT_APP_API_BASE_URL}mentories/own`
  const token = JSON.stringify(localStorage.getItem('token'))

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
    <div className='mentory-own-list-container'>
      <h1>Mis mentorías</h1>
      <MentoryOwnList mentories={mentories} />
    </div>
  )
}

export default MentoryOwnListContainer
