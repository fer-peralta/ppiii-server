import './Navbar.css'
import Logo from '../../utils/favourite-book.svg'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const token = JSON.stringify(localStorage.getItem('token'))
  const location = useLocation()

  const conditionalNavBar = () => {
    if (location.pathname == "/" || location.pathname == "/register") {
      return (
        <div className='navList'>

        </div>
      )
    } else {
      return (
        <div className='navList'>
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
        </div>
      )
    }
  }

  const conditionalLogo = () => {
    if (location.pathname == "/" || location.pathname == "/register") {
      return (
        <div className='div_logo'>
          <Link to='/'>
            <img src={Logo} alt='Logotipo' className='home_button' />
          </Link>
        </div>
      )
    } else {
      return (
        <div className='div_logo'>
          <Link to='/mentories'>
            <img src={Logo} alt='Logotipo' className='home_button' />
          </Link>
        </div>
      )
    }
  }

  const loggedIn = () => {
    if (token) {

      return (
        <nav className='navTop'>
          {conditionalLogo()}
          {conditionalNavBar()}
        </nav>
      )
    } else {
      return 'hola'
    }
  }
  return loggedIn()
}

export default Navbar
