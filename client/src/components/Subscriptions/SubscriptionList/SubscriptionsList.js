import Subscription from '../Subscription/Subscription'
import './SubscriptionsList.scss'

const SubscriptionList = ({ subscriptions }) => {
  return (
    <ul className='subscription-list'>
      {subscriptions?.map(susbcription => (
        <Subscription key={susbcription._id} susbcription={susbcription} />
      ))}
    </ul>
  )
}

export default SubscriptionList
