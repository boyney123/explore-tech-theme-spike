import React, { useState } from 'react'
import { Link } from 'gatsby'

import './styles.css'

import useConfigProviderContext from '../ConfigProvider/context'

export default function() {
  const { title } = useConfigProviderContext()
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
        <a
          className="is-pulled-right"
          href="https://github.com/boyney123/react.explore-tech.org"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </nav>
  )
}
