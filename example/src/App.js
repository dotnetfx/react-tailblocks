import React from 'react'
import { Dashboard1 } from 'react-tailblocks'

const App = () => {

  return (
    <div className="bg-gray-100">
      <Dashboard1 onSelect={(t) => {console.log(t)}} />
    </div>
  )
}

export default App
