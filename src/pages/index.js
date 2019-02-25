import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import Category from '../components/Category'
import SiteHeader from '../components/SiteHeader'

import 'bulma/css/bulma.css'

const IndexPage = props => {
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
          site: { siteMetadata: { categories, title, description } = {} } = {},
        } = data

        return (
          <Layout
            header={
              <SiteHeader
                count={edges.length}
                title={title}
                description={description}
              />
            }
          >
            <div className="container is-fluid">
              <div className="columns is-multiline">
                {categories.map(item => {
                  return (
                    <Category
                      key={item.key}
                      name={item.key}
                      subtitle={item.subtitle}
                    />
                  )
                })}
              </div>
            </div>
          </Layout>
        )
      }}
    />
  )
}

export default IndexPage
