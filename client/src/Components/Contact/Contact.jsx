import React from 'react'
import { Phone, Mail, WhatsApp, Facebook, LinkedIn } from '@material-ui/icons'
import GlobalLinks from '../GlobalLinks/GlobalLinks'
import contact from '../../assets/images/contact.svg'

const Contact = () => {
  const fontSize = window.screen.width > 350 ? 48 : 64
  return (
    <div className='contact'>
      <h1 className='contact__title'>Contacts</h1>
      <div className='contact__display'>
        <div className='contact__display--table'>
          <div className='table__row'>
            <div className='table__row--col'>
              <Mail style={{ fontSize, color: '#8fd0ee' }} />
            </div>
            <div className='table__row--col-value'>
              <a href='mailto:contact@samba-company.com'>
                contact@samba-company.fr
              </a>
            </div>
          </div>
          <div className='table__row'>
            <div className='table__row--col'>
              <Phone style={{ fontSize }} />
              <span className='table__row--col-svg'>/</span>{' '}
              <WhatsApp style={{ fontSize, color: '#2BB140' }} />
            </div>
            <div className='table__row--col-value'>
              <a href='tel:+33756989002'>07 56 98 90 02</a>
            </div>
          </div>
          <div className='table__row'>
            <div className='table__row--col'>
              <Facebook style={{ fontSize, color: '#3F64AC' }} />
            </div>
            <div className='table__row--col-value'>
              <a
                href='https://www.facebook.com/SambaCompanyFrance'
                target='_blank'
                rel='noreferrer'
              >
                fb/SambaCompanyFrance
              </a>
            </div>
          </div>
          <div className='table__row'>
            <div className='table__row--col'>
              <LinkedIn style={{ fontSize, color: '#017BB6' }} />
            </div>
            <div className='table__row--col-value'>
              <a
                href='https://www.linkedin.com/in/hadrien-samouillan/'
                target='_blank'
                rel='noreferrer'
              >
                lkdn/hadrien-samouillan
              </a>
            </div>
          </div>
        </div>
        <img
          className='contact__display--img'
          src={contact}
          alt='creationsvg'
        />
      </div>
      <GlobalLinks />
    </div>
  )
}

export default Contact
