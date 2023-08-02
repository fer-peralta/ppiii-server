import { Link } from 'react-router-dom'

export const notLoggedNav = () => {
  return (
    <div className='navList'>
      <Link to='/home' className='nav_buttons'>
        Ir a home
      </Link>
      <Link to='/login' className='nav_buttons' id='profile'>
        Login
      </Link>
      <Link to='/register' className='nav_buttons'>
        Registro
      </Link>
    </div>
  )
}
