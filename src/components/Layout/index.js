import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Navigation from '../Navigation'
import Footer from '../Footer'
import './styles.css'

const Layout = ({ children, count, header }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
            integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP"
            crossorigin="anonymous"
          />
          <html lang="en" />
        </Helmet>
        <Navigation />
        {header}
        <div className="content">{children}</div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  setFilter: PropTypes.func,
}

export default Layout
