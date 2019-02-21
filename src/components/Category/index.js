import React from 'react'
import { navigate, StaticQuery } from 'gatsby'
import iconToCategoryMap from '../../utils/icon-to-category'
import genericIcon from '../../icons/circle.svg'
import './styles.css'
// import { siteMetadata } from '../../../gatsby-config'

const Category = ({ name } = {}) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              description
            }
          }
        }
      `}
      render={data => {
        // const { subtitle } = data.site.siteMetadata.categories[name]
        const icon = genericIcon
        const subtitle = data.site.siteMetadata.description

        return (
          <div className="category-container column is-one-third">
            <div className="category" onClick={() => navigate(name)}>
              <img src={icon} alt="icon" />
              <h2 className=" has-text-centered">{name}</h2>

              <div className="category-content">
                <div className="media">
                  <div className="media-content">
                    <p className="subtitle is-6">{subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

export default Category
