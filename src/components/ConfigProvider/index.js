import React, { useState, useEffect } from 'react'
import setPath from 'lodash/set'
import getPath from 'lodash/get'

import { ConfigProvider } from './context'

export default function({ config }) {
  const context = {
    config,
  }

  return <ConfigProvider value={context}>{children}</ConfigProvider>
}
