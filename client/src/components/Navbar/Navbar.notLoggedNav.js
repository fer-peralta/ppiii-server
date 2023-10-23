
import React, { useState } from "react";
import { NavLink } from 'react-router-dom'

export const NotLoggedNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (

    <div className='navList'>
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
    </div>
  )
}

