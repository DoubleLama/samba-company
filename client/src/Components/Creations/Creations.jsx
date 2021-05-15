import React from 'react'
import { connect } from 'react-redux'
import uuid from 'react-uuid'
import PropTypes from 'prop-types'
import GlobalLinks from '../GlobalLinks/GlobalLinks'
import create from '../../assets/images/create.svg'

const Creations = (props) => {
  const { creations } = props

  const mapCreations = creations
    .sort((a, b) => a.id > b.id)
    .map((creation) => (
      <div key={uuid()} className='table__row'>
        <div className='table__row--col'>
          <h3>{creation.title}</h3>
          <p className='table__row--col-desc'>{creation.description}</p>
        </div>
        <div className='table__row--col'>
          <p className='table__row--col-price'>{creation.price}</p>
        </div>
      </div>
    ))

  return (
    <div className='creation'>
      <h1 className='creation__title'>Creation de site internet</h1>
      <div className='creation__display'>
        <div className='creation__display--table'>
          {mapCreations}
          <div className='table__row'>
            <h4 className='table__row--notions'>
              <br />* Obligatoire pour tout site.
            </h4>
          </div>
        </div>
        <img
          src={create}
          alt='creationsvg'
          className='creation__display--img'
        />
      </div>
      <GlobalLinks />
    </div>
  )
}

Creations.defaultProps = {
  creations: [],
}

Creations.propTypes = {
  creations: PropTypes.instanceOf(Array),
}

const mapStateToProps = (state) => ({
  creations: state.scCreations.creations,
})

export default connect(mapStateToProps)(Creations)
