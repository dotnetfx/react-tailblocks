# react-tailblocks

> React components based on TailwindCSS and TailBlocks (https://tailblocks.cc/)

[![NPM](https://img.shields.io/npm/v/react-tailblocks.svg)](https://www.npmjs.com/package/react-tailblocks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install
Install and configure TailwindCss as per TailwindCss documentation (https://tailwindcss.com/docs/installation)

```bash
npm install --save react-tailblocks

or 

yarn add react-tailblocks
```

Then configure your tailwind.config.js file to include the react-tailwind library from your node_modules folder in the purge 
array. To do this add './node_modules/react-tailblocks/**/*.{js,ts,jsx,tsx}' to the end of the list.

```bash
purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',

    // ...
    
    './node_modules/react-tailblocks/**/*.{js,ts,jsx,tsx}'
  ],
```


## Important
Please be aware this componet library is still under development (see version number before considering usage)

## Documentation
Detailed documentation is not yet available.  If you are using this early version of the component library
please see the code for usage details.  Each component has default parameters specified that will give you
insight into its usage.

## Usage

```jsx
import React from 'react'
import { Ecommerce1 } from 'react-tailblocks'

export default function Example() {
    return <Ecommerce1 items={
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
}
```

## Components
Card1, Content3, Dashboard1, Ecommerce1, Email1, Feature1, Footer1, Footer4, Form, Grid1, Header2, Hero1, Input, Layout1, Login1, Logo1, Modal1, Pricing1, Register1, Reset1, Select, Statistics3, Steps3, Table1, Tabs1, TextArea

## License

MIT © [dotnetfx](https://github.com/dotnetfx)
