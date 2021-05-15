import React from 'react'
import { connect } from 'react-redux'
import uuid from 'react-uuid'
import PropTypes from 'prop-types'
import GlobalLinks from '../GlobalLinks/GlobalLinks'
import repair from '../../assets/images/repair.svg'

const Maintenances = (props) => {
  const { maintenances } = props

  const mapMaintenances = maintenances
    .sort((a, b) => a.id > b.id)
    .map((maintenance) => (
      <div key={uuid()} className='table__row'>
        <div className='table__row--col'>
          <h3>{maintenance.title}</h3>
          <p className='table__row--col-desc'>{maintenance.description}</p>
        </div>
        <div className='table__row--col'>
          <p className='table__row--col-price'>{maintenance.price}</p>
        </div>
      </div>
    ))

  return (
    <div className='maintenance'>
      <h1 className='maintenance__title'>Dépannage informatique</h1>
      <div className='maintenance__display'>
        <div className='maintenance__display--table'>
          {mapMaintenances}
          <div className='table__row'>
            <h4 className='table__row--notions'>
              <br />* Ne peut pas s&apos;effectuer à distance, des frais de
              déplacement peuvent s&apos;appliquer.
            </h4>
          </div>
        </div>
        <img
          className='maintenance__display--img'
          src={repair}
          alt='creationsvg'
        />
      </div>
      <GlobalLinks />
    </div>
  )
}

Maintenances.defaultProps = {
  maintenances: [],
}

Maintenances.propTypes = {
  maintenances: PropTypes.instanceOf(Array),
}

const mapStateToProps = (state) => ({
  maintenances: state.scMaintenances.maintenances,
})

export default connect(mapStateToProps)(Maintenances)
