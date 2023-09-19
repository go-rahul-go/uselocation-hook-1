import React from 'react'
import { NavLink } from 'react-router-dom'
export const Nav = () => {
  return (
    <nav>
        <NavLink to='/' className={({isActive})=>(isActive?"active":"inactive")}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=>(isActive?"active":"inactive")}>About</NavLink>
        <NavLink to="/contact" className={({isActive})=>(isActive?"active":"inactive")}>Contact</NavLink>
    </nav>
  )
}

export default Nav;
