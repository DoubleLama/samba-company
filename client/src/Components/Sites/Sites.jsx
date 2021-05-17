import React from 'react'
import { connect } from 'react-redux'
import uuid from 'react-uuid'
import PropTypes from 'prop-types'

const Sites = (props) => {
  const { sites } = props

  const mapSites = sites
    .sort((a, b) => a.id > b.id)
    .map((site) => (
      <a
        href={site.url}
        target='_blank'
        rel='noreferrer'
        key={uuid()}
        className='sitesContainer__card'
      >
        <img
          src={site.image}
          alt={site.name}
          className='sitesContainer__card--img'
        />
        <div className='sitesContainer__card--desc'>
          <p className='sitesContainer__card--desc-title'>{site.name}</p>
          <p>Commencé en : {site.date}</p>
          <p>
            Etat :{' '}
            <span className={`sitesContainer__card--desc-status${site.status}`}>
              {site.statusSlug}
            </span>
          </p>
        </div>
      </a>
    ))

  return (
    <div className='sitesContainer'>
      <h1 className='sitesContainer__title'>Nos créations</h1>
      {mapSites}
    </div>
  )
}

Sites.defaultProps = {
  sites: [],
}

Sites.propTypes = {
  sites: PropTypes.instanceOf(Array),
}

const mapStateToProps = (state) => ({
  sites: state.scSites.sites,
})

export default connect(mapStateToProps)(Sites)
