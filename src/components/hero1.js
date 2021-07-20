import React from 'react'

export default function Hero1({ title, description, image, button1, button2, className }) {
    const _title = title || "Before they're Sold out ReadyMade Gluten"
    const _description = description || "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray."
    const _image = image || "https://dummyimage.com/720x600"

    let _button1 = <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Button One</button>
    let _button2 = <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button Two</button>
    
    if (button1 !== undefined) {
        if (button1 && typeof button1.title === "string") {
            _button1 = 
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" 
                    onClick={button1.onClick ? button1.onClick : ()=>{}}>
                    {button1.title}
                </button> 
        } else {
            _button1 = button1
        }
    }

    if (button2 !== undefined) {
        if (button2 && typeof button2.title === "string") {
            _button12 = 
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" 
                    onClick={button2.onClick ? button2.onClick : ()=>{}}>
                    {button2.title}
                </button> 
        } else {
            _button2 = button2
        }
    }

    return (
        <section className={"text-gray-600 body-font " + (className ? className : "")}>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    { typeof _title === "string" ?
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{_title}</h1> :
                        (_title)
                    }
                    { typeof _description === "string" ?
                        <p className="mb-8 leading-relaxed">{_description}</p> :
                        _description
                    }
                    <div className="flex justify-center">
                        { _button1 }
                        { _button2 }
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    { typeof _image === "string" ? 
                        <img className="object-cover object-center rounded" alt="hero" src={_image} /> :
                        _image 
                    }
                </div>
            </div>
        </section>
    )
}