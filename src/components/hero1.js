import React from 'react'

export default function Hero1({ options, className }) {
    const _options = options || {
        title: "Before they're Sold out ReadyMade Gluten",
        description: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.",
        image: "https://dummyimage.com/720x600",
        button1: {
            title: "Button",
            onClick: () => { alert("Button1 clicked") }
        },
        button2: {
            title: "Button",
            onClick: () => { alert("Button2 clicked") }
        }
    }

    return (
        <section className={"text-gray-600 body-font " + className}>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{_options.title}</h1>
                    <p className="mb-8 leading-relaxed">{_options.description}</p>
                    <div className="flex justify-center">
                        { _options.button1 && 
                            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded 
                                text-lg" onClick={_options.button1.onClick}>{_options.button1.title}</button>
                        }
                        { _options.button2 && 
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 
                                rounded text-lg" onClick={_options.button2.onClick}>{_options.button2.title}</button>
                        }
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    { typeof _options.image === "string" && <img className="object-cover object-center rounded" alt="hero" src={_options.image} /> }
                    { typeof _options.image !== "string" && _options.image }
                    
                </div>
            </div>
        </section>
    )
}