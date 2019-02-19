import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import logo from '../../../logo.svg'

const SiteHeader = ({ count }) => {
  const { title, description, content } = siteMetadata

  return (
    <section className="main hero site-header">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">{title}</h1>

          <h2 className="subtitle">{description}</h2>

          <a
            className="button is-medium add-action contribute"
            href="https://github.com/boyney123/react.explore-tech.org/blob/master/CONTRIBUTING.md#adding-a-material-to-the-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
            Add Resource
          </a>

          <a
            className="button is-medium add-action twitter"
            href="https://twitter.com/intent/tweet?text=An%20open%20source%20project%20that%20lists%20resources%20to%20help%20developers%20explore%20React%20%F0%9F%91%8D.%0A%0A%20https%3A%2F%2Freact.explore-tech.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter" />
            Share with others
          </a>

          <p className="mt20">{count} resource's for you to explore!</p>
          <div className="badges">
            <a
              href="https://github.com/boyney123/react.explore-tech.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="badges__github"
                src="https://img.shields.io/github/stars/boyney123/react.explore-tech.org.svg?style=social"
                alt="github badge"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SiteHeader
