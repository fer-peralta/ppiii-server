import Subscription from '../Subscription/Subscription'

const SubscriptionList = ({ subscriptions }) => {
  return (
    <div className='subscription-list'>
      {subscriptions?.map(susbcription => (
        <Subscription key={susbcription._id} susbcription={susbcription} />
      ))}
    </div>
  )
}

export default SubscriptionList
