import './Navbar.css'
import Logo from '../../utils/favourite-book.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const token = JSON.stringify(localStorage.getItem('token'))

  const loggedIn = () => {
    if (token) {
      return (
        <nav className='navTop'>
          <div className='div_logo'>
            <Link to='/'>
              <img src={Logo} alt='Logotipo' className='home_button' />
            </Link>
          </div>
          <div className='navList'>
            <Link to='/mentories' className='nav_buttons'>
              Inicio
            </Link>
            <Link to='/' className='nav_buttons'>
              Login
            </Link>
            <Link to='/register' className='nav_buttons'>
              Registro
            </Link>
            <Link to='/profile' className='nav_buttons'>
              Perfil
            </Link>
            <Link to='/mentories/create' className='nav_buttons'>
              Crear mentoría
            </Link>
            <Link to='/mentories/own' className='nav_buttons'>
              Mis mentorías
            </Link>
          </div>
        </nav>
      )
    } else {
      return 'hola'
    }
  }
  return loggedIn()
}

export default Navbar
