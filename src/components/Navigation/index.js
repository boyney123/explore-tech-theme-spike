import React, { useState } from 'react'
import { Link } from 'gatsby'

import './styles.css'

import useConfigProviderContext from '../ConfigProvider/context'

export default function() {
  const { title, github_url } = useConfigProviderContext()
  return (
    <nav
      className="nav is-clearfix"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="is-pulled-left site-brand">
        <Link to="/">{title}</Link>
      </div>
      <div>
        <a className="is-pulled-right" href={github_url} target="_blank">
          GitHub
        </a>
      </div>
    </nav>
  )
}
