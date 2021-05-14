import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const GlobalLinks = () => {
  const [show, setShow] = useState(true)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/contact') {
      setShow(false)
    }
  }, [location])
  return (
    <div className='linksGroup'>
      <Link to='/' className='linksGroup__btn'>
        Retour
      </Link>
      {show && (
        <Link to='/contact' className='linksGroup__btn'>
          Contact
        </Link>
      )}
    </div>
  )
}

export default GlobalLinks
