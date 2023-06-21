import { useState, useEffect } from 'react'
import MentoryList from '../MentoryList/MentoryList'
import { config } from '../../../config/config'
import './MentoryOwnListContainer.scss'
import { options } from './MentoryOwnListContainer.fetchOptions'
import { useNavigate } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
// import { useQuery } from 'react-query'
// import { Link } from 'react-router-dom'

const ItemListContainer = () => {
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

  //   const { data, status } = useQuery('users', getUsers)

  return (
    <div className='mentory-own-list-container'>
      <h1>Mis mentorías</h1>
      <MentoryList mentories={mentories} />
    </div>
  )
}

export default ItemListContainer
