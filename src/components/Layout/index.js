import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import ConfigProvider from '../ConfigProvider'
import Navigation from '../Navigation'
import Footer from '../Footer'
import './styles.css'

const Layout = ({ children, count, header, siteMetadata }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
              categories {
                key
                subtitle
              }
            }
          }
          allMarkdownRemark(sort: { order: ASC, fields: [fields___category] }) {
            edges {
              node {
                fields {
                  category
                }
              }
            }
          }
        }
      `}
      render={data => {
        const {
          allMarkdownRemark: { edges = [] } = {},
          site: { siteMetadata = {} } = {},
        } = data

        return (
          <>
            <Helmet
              title="explore-tech.theme"
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
            <ConfigProvider config={siteMetadata}>
              <Navigation />
              {header}
              <div className="content">{children}</div>
              <Footer />
            </ConfigProvider>
          </>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  setFilter: PropTypes.func,
}

export default Layout
