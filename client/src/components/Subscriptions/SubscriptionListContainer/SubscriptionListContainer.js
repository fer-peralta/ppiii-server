import { useState, useEffect } from 'react'
import SubscriptionList from '../SubscriptionList/SubscriptionsList'
import { config } from '../../../config/config'
import { useNavigate } from 'react-router-dom'
import { sendRequest } from '../../../services/apiRequest.generator'

const SubscriptionListContainer = () => {
  const [subscriptions, setSubscriptions] = useState([])
  const navigate = useNavigate()
  const URL = `${config.REACT_APP_API_BASE_URL}users/subscriptions`
  const token = JSON.stringify(localStorage.getItem('token'))

  const getSubscriptions = async () => {
    const response = await sendRequest('GET', URL, token)
    if (
      response.status === 400 ||
      response.status === 401 ||
      response.status === 403
    ) {
      navigate('/')
    }

    const subscriptionsGet = response.data.map(subs => {
      const data = subs
      return { _id: subs._id, ...data }
    })
    setSubscriptions(subscriptionsGet)
    return subscriptionsGet
  }

  useEffect(() => {
    getSubscriptions().then(subscriptions => {
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

export default SubscriptionListContainer
