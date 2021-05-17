# react-tailblocks

> React components based on TailwindCSS and TailBlocks (https://tailblocks.cc/)

[![NPM](https://img.shields.io/npm/v/react-tailblocks.svg)](https://www.npmjs.com/package/react-tailblocks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-tailblocks

or 

yarn add react-tailblocks
```

## Usage

```jsx
import React, { Component } from 'react'
import { Blog1 } from 'react-tailblocks'

class Example extends Component {
  render() {
    return <Blog1 details={
      [
        {
            title: "The Catalyzer",
            category: "Category",
            description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            image: "https://dummyimage.com/720x400",
            more: "Learn More",
            views: 1200,
            comments: 6
        }, {
            title: "The 400 Blows",
            category: "Category",
            description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            image: "https://dummyimage.com/720x400",
            more: "Learn More",
            views: 1200,
            comments: 6
        },{
            title: "Shooting Stars",
            category: "Category",
            description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            image: "https://dummyimage.com/720x400",
            more: "Learn More",
            views: "1.2K",
            comments: 6
        }
      ]
    }/>
  }
}
```

## License

MIT © [dotnetfx](https://github.com/dotnetfx)
