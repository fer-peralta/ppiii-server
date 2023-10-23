import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Logo from '../../assets/images/logo_white_large.png'
import { conditionalNavList } from './Navbar.conditionalNav'
import { NavLink } from 'react-router-dom'
//import { NotLoggedNav } from './Navbar.notLoggedNav'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation()
  const [isLogged, setIsLogged] = useState(false)


  const token = JSON.stringify(localStorage.getItem('token'))

  useEffect(() => {
    if (token === null || token === 'null') {
      setIsLogged(false)
    } else if (token !== null) {
      setIsLogged(true)
    }
  }, [setIsLogged, token])

  const conditionalNavBar = () => {
    if (
      location.pathname === '/home' ||
      location.pathname === '/login' ||
      location.pathname === '/register'
    ) {
      if (!isLogged) {
        return (<div className='navList'>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)} >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={menuOpen ? "open" : ""}>
            <li>
              <NavLink to="/home" className='nav_buttons'> Ir a home</NavLink>
            </li>
            <li>
              <NavLink to="/login" className='nav_buttons' id='profile'>
                Login</NavLink>
            </li>
            <li>
              <NavLink to='/register' className='nav_buttons'>
                Registro</NavLink>
            </li>
          </ul>
        </div>)
      } else {
        return (
          <div className='navList'>
            <Link to='/home' className='nav_buttons'>
              Home
            </Link>
            <Link to='/mentories' className='nav_buttons'>
              Inicio
            </Link>
            <Link to='/profile' className='nav_buttons' id='profile'>
              Perfil
            </Link>
            <Link to='/mentories/create' className='nav_buttons'>
              Crear mentoría
            </Link>
            <Link to='/mentories/own' className='nav_buttons'>
              Mis mentorías
            </Link>
            <Link to='/subscriptions' className='nav_buttons'>
              Mis inscripciones
            </Link>
          </div>)
      }
    } else {
      return conditionalNavList()
    }
  }

  const logo = () => {
    return (
      <div className='div_logo'>
        <Link to='/home'>
          <img
            src={Logo}
            alt='Voluntarios Beltrán Logo'
            className='home_button'
          />
        </Link>
      </div>
    )
  }

  const loggedIn = () => {
    if (token) {
      return (
        <nav className='navTop'>
          {logo()}
          {conditionalNavBar()}
        </nav>
      )
    } else {
      return console.log('no logueado')
    }
  }
  return loggedIn()
}

export default Navbar
