import React from 'react'
import { Header2, Footer1, Login1 } from 'react-tailblocks'

const App = () => {
  return (
    <React.Fragment>
      <Header2 fixed />
      <Login1 />
      <Footer1 className="bg-blue-100" />
    </React.Fragment>
  )
}

export default App
