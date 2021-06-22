import React from 'react'
import { Header2 as Header, Dashboard1 as Dashboard } from 'react-tailblocks'

const App = () => {
  return (
    <Dashboard navigation={<Header fixed={false} />} />
  )
}

export default App
