import React, {useState} from 'react'
import { Blog1, Header2, Footer1, Login1, Pricing1, Register1, Reset1, Modal1 } from 'react-tailblocks'

const App = () => {

  return (
    <React.Fragment>
      <Header2 fixed />
      <Blog1 />
      <Modal1 />
      <Pricing1 />
      <Register1 onRegister={(value) => console.log(value)} passwordLength={8} loginUrl="#" />
      <Login1 onLogin={(value) => console.log(value)} passwordLength={8} forgotUrl="#" registerUrl="/auth/register" />
      <Reset1
        loginUrl="#" 
        onReset={(value) => {}}
      />

      <Footer1 />
    </React.Fragment>
  )
}

export default App
