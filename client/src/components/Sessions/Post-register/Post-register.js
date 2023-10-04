import { useNavigate } from 'react-router-dom'

const PostRegister = () => {
  const navigate = useNavigate()

  const handleGoHome = async () => {
    navigate('/home')
  }

  return (
    <>
      <div className='error404-container'>
        <h1>Usuario creado con éxito</h1>
        <h2>Verifica tu casilla de email para terminar el registro</h2>
        <button onClick={handleGoHome}>Ir a home</button>
      </div>
    </>
  )
}

export default PostRegister
