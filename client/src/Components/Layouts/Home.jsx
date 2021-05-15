import React from 'react'
import Sites from '../Sites/Sites'
import siteBuilding from '../../assets/images/siteBuilding.svg'

const Home = () => {
  return (
    <main>
      <section className='homepage'>
        <div className='homepage__title'>
          <h1>Créateur de site internet depuis 2020</h1>
          <br />
          <h2>
            Maintenant vous pouvez aussi compter sur nous pour du dépannage
            informatique
          </h2>
          <br />
          <br />
          <a
            className='homepage__title--devis'
            href='mailto:contact@samba-company.com?subject=Demande de devis&body=Bonjour je souhaite prendre contact avec vous pour une demande de devis concernant ...'
          >
            Demander un devis
          </a>
        </div>
        <img src={siteBuilding} alt='siteBuilding' className='homepage__img' />
      </section>
      <Sites />
    </main>
  )
}

export default Home
