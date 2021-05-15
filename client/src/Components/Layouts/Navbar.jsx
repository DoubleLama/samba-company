import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/sc_couleurs.svg'
import logoResponsive from '../../assets/images/sc_couleurs_responsive.svg'
import { toggleActive } from '../../tools'

const Navbar = () => {
  const { width } = window.screen
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
          {width > 500 ? (
            <img src={logo} alt='logo' className='navbar__logo' />
          ) : (
            <img src={logoResponsive} alt='logo' className='navbar__logo' />
          )}
        </Link>
        <Link
          onClick={(e) => toggleActive(e.target)}
          className='navbar__navlinks--item'
          to='creation'
        >
          Creation de site {width > 500 ? 'internet' : ''}
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
      <div className='navbar__burger'>
        <div className='navbar__burger--line1' />
        <div className='navbar__burger--line2' />
        <div className='navbar__burger--line3' />
      </div>
    </nav>
  )
}

export default Navbar
