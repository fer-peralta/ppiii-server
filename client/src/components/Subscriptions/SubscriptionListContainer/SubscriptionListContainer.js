import { useState, useEffect } from 'react'
import SubscriptionList from '../SubscriptionList/SubscriptionsList'
import { config } from '../../../config/config'

const ItemListContainer = () => {
  const [subscriptions, setSubscriptions] = useState([])

  const URL = `${config.REACT_APP_API_BASE_URL}users/subscriptions`
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
    const subscriptionsGet = dataNew.data.map(subs => {
      const data = subs
      return { _id: subs._id, ...data }
    })
    setSubscriptions(subscriptionsGet)
    return subscriptionsGet
  }

  console.log(subscriptions)

  useEffect(() => {
    getUsers().then(subscriptions => {
      setSubscriptions(subscriptions)
    })
  }, [])
  console.log(subscriptions)

  return (
    <div className='subscription-list-container'>
      <h1>Mis subscripciones</h1>
      <SubscriptionList subscriptions={subscriptions} />
    </div>
  )
}

export default ItemListContainer
