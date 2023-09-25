import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Logo from '../../assets/images/logo_white_large.png'
import { conditionalNavList } from './Navbar.conditionalNav'
import { notLoggedNav } from './Navbar.notLoggedNav'

const Navbar = () => {
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
        return notLoggedNav()
      } else {
        return conditionalNavList()
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
