import React, {useState} from 'react'
import { Header2, Footer1, Login1, Pricing1, Register1, Reset1, Modal1 } from 'react-tailblocks'

const App = () => {
  const [errorMsg, setErrorMsg] = useState()

  console.log(errorMsg)
  return (
    <React.Fragment>
      <Header2 fixed />
      <Modal1 />
      <Pricing1 />
      <Register1 onRegister={(value) => console.log(value)} passwordLength={8} loginUrl="#" />
      <Login1 onLogin={(value) => console.log(value)} passwordLength={8} forgotUrl="#" registerUrl="/auth/register" />
      <Reset1
        error={errorMsg} 
        loginUrl="#" 
        onReset={(value) => {
          setErrorMsg("This is a test error")
        }}
      />

      <Footer1 className="bg-blue-100" />
    </React.Fragment>
  )
}

export default App
