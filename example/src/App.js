import React from 'react'
import { Header2 as Header, Ecommerce1 as Ecommerce } from 'react-tailblocks'

const svg = 
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" 
    strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">   
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>

const App = () => {
  return (
    <div>
      <Header />
      <Ecommerce items={
        [
          {
              title: "The Catalina",
              category: "Boating",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet hendrerit nisi quis viverra. Cras quis ipsum arcu. Phasellus in nibh mauris. Cras malesuada facilisis porttitor.",
              image: 
                <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>,
              price: <p className="mt-2">$16.00</p>
          }, {
              title: "The 400 Blowfish",
              category: "Fishing",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet hendrerit nisi quis viverra. Cras quis ipsum arcu. Phasellus in nibh mauris. Cras malesuada facilisis porttitor.",
              image: "https://dummyimage.com/420x260",
              price: "316.00"
          }, {
              title: "Shooting Fish",
              category: "Fishing",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet hendrerit nisi quis viverra. Cras quis ipsum arcu. Phasellus in nibh mauris. Cras malesuada facilisis porttitor.",
              image: "https://dummyimage.com/420x260",
              price: 129.99
          }
        ]
  }/>
    </div>
  )
}

export default App
