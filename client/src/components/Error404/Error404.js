import './Error404.css'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
  //   const navigate = useNavigate()

  //   const handleLogOut = async () => {
  //     setLogout(true)
  //   }

  //   useEffect(() => {
  //     if (logout === true) {
  //       setTimeout(() => {
  //         navigate('/')
  //       }, '500')
  //     }
  //   }, [navigate, logout])

  return (
    <>
      <h1>Error 404</h1>
      <h2>Página no encontrada</h2>
    </>
  )
}

export default Error404
