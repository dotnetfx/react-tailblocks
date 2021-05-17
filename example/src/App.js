import React from 'react'
import { Blog1 } from 'react-tailblocks'

const App = () => {
  return <Blog1 details={
    [
      {
          title: "The Catalina",
          category: "Boating",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet hendrerit nisi quis viverra. Cras quis ipsum arcu. Phasellus in nibh mauris. Cras malesuada facilisis porttitor.",
          image: "https://dummyimage.com/720x400",
          more: "Learn More",
          views: "1.2K",
          comments: "6"
      }, {
          title: "The 400 Blowfish",
          category: "Fishing",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet hendrerit nisi quis viverra. Cras quis ipsum arcu. Phasellus in nibh mauris. Cras malesuada facilisis porttitor.",
          image: "https://dummyimage.com/720x400",
          more: "Learn More",
          views: "1.2K",
          comments: "6"
      },{
          title: "Shooting Fish",
          category: "Fishing",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet hendrerit nisi quis viverra. Cras quis ipsum arcu. Phasellus in nibh mauris. Cras malesuada facilisis porttitor.",
          image: "https://dummyimage.com/720x400",
          more: "Learn More",
          views: "1.2K",
          comments: "6"
      }
    ]
  }/>
}

export default App
