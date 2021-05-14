import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/sc_couleurs.svg'
import { toggleActive } from '../../tools'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='starsNav' />
      <div className='starsNav2' />
      <div className='starsNav3' />
      <div className='navbar__navlinks'>
        <Link
          onClick={(e) => toggleActive(e.target)}
          className='navbar__navlinks--item noactive'
          to='/'
        >
          <img src={logo} alt='logo' className='navbar__logo' />
        </Link>
        <Link
          onClick={(e) => toggleActive(e.target)}
          className='navbar__navlinks--item'
          to='creation'
        >
          Creation de site internet
        </Link>
        <Link
          onClick={(e) => toggleActive(e.target)}
          className='navbar__navlinks--item'
          to='maintenance'
        >
          Depannage informatique
        </Link>
        <Link
          onClick={(e) => toggleActive(e.target)}
          className='navbar__navlinks--item'
          to='contact'
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
