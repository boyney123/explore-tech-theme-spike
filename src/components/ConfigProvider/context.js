import * as React from 'react'

const ConfigProviderContext = React.createContext({})

export const ConfigProvider = ConfigProviderContext.Provider
export const ConfigProviderConsumer = ConfigProviderContext.Consumer

export default function useConfigProviderContext() {
  return React.useContext(ConfigProviderContext)
}
