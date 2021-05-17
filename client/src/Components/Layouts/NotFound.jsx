import React from 'react'
import notfound from '../../assets/images/notfound.svg'

const NotFound = () => {
  return (
    <div className='notFound'>
      <h2 className='notFound__title'>
        La page que vous recherchez n&apos;existe pas...
      </h2>
      <img src={notfound} alt='404' className='notFound__img' />
    </div>
  )
}

export default NotFound
