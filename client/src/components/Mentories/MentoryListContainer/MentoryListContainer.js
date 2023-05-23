import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MentoryList from '../MentoryList/MentoryList'
import { useQuery } from 'react-query'
import { config } from '../../../config/config'
import { Link } from 'react-router-dom'

const ItemListContainer = ({ saludo }) => {
  const [mentories, setMentories] = useState([])

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
    <div className='itemListContainer'>
      <h1>Mentorías disponibles</h1>
      <ul>
        <Link to='/mentories/create'>Crear mentoría</Link>
        <Link to='/mentories/modify'>Modificar mentoría</Link>
        <Link to='/mentories/delete'>Borrar mentoría</Link>
      </ul>
      <MentoryList mentories={mentories} />
    </div>
  )
}

export default ItemListContainer
