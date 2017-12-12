import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'

import '../scss/app.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="NYC Planning Labs"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link href="https://fonts.googleapis.com/css?family=Montserrat:900" rel="stylesheet" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    </Helmet>

    <Header />
    {console.log('chidlren', children())}
    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
