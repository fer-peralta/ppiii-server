import { useNavigate } from 'react-router-dom'

const Error404 = () => {
  const navigate = useNavigate()

  const handleGoHome = async () => {
    navigate('/')
  }

  return (
    <>
      <div className='error404-container'>
        <h1>Error 404</h1>
        <h2>Página no encontrada</h2>
        <button onClick={handleGoHome}>Ir a home</button>
      </div>
    </>
  )
}

export default Error404
