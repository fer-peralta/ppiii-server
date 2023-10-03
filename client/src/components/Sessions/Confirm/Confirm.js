import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { config } from '../../../config/config'
import { sendRequest } from '../../../services/apiRequest.generator'

const Confirm = () => {
  const navigate = useNavigate()
  const { token } = useParams()

  const handleGoHome = async () => {
    navigate('/login')
  }

  const URL = `${config.REACT_APP_API_BASE_URL}session/confirm/${token}`
  sendRequest('GET', URL, token)

  return (
    <>
      <div className='error404-container'>
        <h1>Usuario verificado</h1>
        <h2>Ya podés iniciar sesión</h2>
        <button onClick={handleGoHome}>Ir a Login</button>
      </div>
    </>
  )
}

export default Confirm
