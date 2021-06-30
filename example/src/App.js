import React from 'react'
import { Header2, Footer1, Login1, Pricing1, Register1 } from 'react-tailblocks'

const App = () => {
  return (
    <React.Fragment>
      <Header2 fixed />
      <Pricing1 />
      <Register1 onRegister={(value) => console.log(value)} passwordLength={8} loginUrl="#" />
      <Login1 onLogin={(value) => console.log(value)} passwordLength={8} forgotUrl="#" registerUrl="/auth/register" />
      <Footer1 className="bg-blue-100" />
    </React.Fragment>
  )
}

export default App
