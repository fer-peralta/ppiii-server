// import Logo from '../../assets/images/logo.svg'
import Logo from '../../assets/images/logo_white_large.png'
import { Link, useLocation } from 'react-router-dom'
import { conditionalNavList } from './Navbar.conditionalNav'

const Navbar = () => {
  const location = useLocation()
  const token = JSON.stringify(localStorage.getItem('token'))

  const conditionalNavBar = () => {
    if (location.pathname === '/' || location.pathname === '/register') {
      return <div className='navList'></div>
    } else {
      return conditionalNavList()
    }
  }

  const conditionalLogo = () => {
    if (location.pathname === '/' || location.pathname === '/register') {
      return (
        <div className='div_logo'>
          <Link to='/'>
            <img
              src={Logo}
              alt='Voluntarios Beltrán Logo'
              className='home_button'
            />
          </Link>
        </div>
      )
    } else {
      return (
        <div className='div_logo'>
          <Link to='/mentories'>
            <img
              src={Logo}
              alt='Voluntarios Beltrán Logo'
              className='home_button'
            />
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
      return console.log('no logueado')
    }
  }
  return loggedIn()
}

export default Navbar
