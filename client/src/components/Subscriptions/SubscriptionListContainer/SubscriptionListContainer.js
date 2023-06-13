import { useState, useEffect } from 'react'
import SubscriptionList from '../SubscriptionList/SubscriptionsList'
import { config } from '../../../config/config'
import { options } from './SubscriptionListContainer.fetchOptions'
import { useNavigate } from 'react-router-dom'

const ItemListContainer = () => {
  const [subscriptions, setSubscriptions] = useState([])
  const navigate = useNavigate()
  const URL = `${config.REACT_APP_API_BASE_URL}users/subscriptions`
  const token = JSON.stringify(localStorage.getItem('token'))

  const getSusbcriptions = async () => {
    const response = await fetch(URL, options(token))
    response.status === 403 && navigate('/')
    const dataNew = await response.json()
    const subscriptionsGet = dataNew.data.map(subs => {
      const data = subs
      return { _id: subs._id, ...data }
    })
    setSubscriptions(subscriptionsGet)
    return subscriptionsGet
  }

  useEffect(() => {
    getSusbcriptions().then(subscriptions => {
      setSubscriptions(subscriptions)
    })
  }, [])

  return (
    <div className='subscription-list-container'>
      <h1>Mis subscripciones</h1>
      <SubscriptionList subscriptions={subscriptions} />
    </div>
  )
}

export default ItemListContainer
