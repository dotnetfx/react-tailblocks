import React, { useState } from 'react'
import { ExclamationIcon } from '@heroicons/react/outline'
import { Blog1 as Blog, Footer4 as Footer, Hero1 as Hero, Header2 as Header, Pricing1 as Pricing,
         Form1 as Form, Modal1 as Modal } from 'react-tailblocks'

const svg = 
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" 
    strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">   
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>

const App = () => {
  const [ show, setShow ] = useState(false)
  return (
    <div>
      <Header />
      <Hero />
      <Blog />
      <Pricing />
      <Form />
      <Footer />
    </div>
  )
}

export default App
