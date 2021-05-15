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
        <p>{site.name}</p>
        <p>{site.date}</p>
        <p>{site.status}</p>
      </a>
    ))

  return (
    <div>
      <section className='container'>
        <div className='sitesContainer'>
          <h1 className='sitesContainer__title'>Nos créations</h1>
          {mapSites}
        </div>
      </section>
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
