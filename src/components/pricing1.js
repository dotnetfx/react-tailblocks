import React, { useState } from 'react'
import { ArrowSmRightIcon, CheckIcon } from '@heroicons/react/outline'

export default function Pricing1({ title, description, categories, starting, interval, cards, className, color }) {
    const _bdcolor = color ? { borderColor: color } : {}
    const _bgcolor = color ? { backgroundColor: color } : {}

    const _interval = interval === undefined ? true : interval
    const _title = title || "Pricing"
    const _description = description || "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical."
    const _categories = categories || [
        "Monthly",
        "Annually"
    ]

    const _starting = starting || _categories[0]

    const _cards = cards || [{
        title: "START",
        description: "Literally you probably haven't heard of them jean shorts",
        price: "Free",
        features: [
            "Vexillologist pitchfork",
            "Tumeric plaid portland",
            "Mixtape chillwave tumeric"
        ],
        button: {
            title: "Button",
            onClick: () => { alert("Button 'Free' clicked") }
        },
        image: "https://dummyimage.com/720x400",
        category: "Monthly",
        disabled: true
    }, {
        title: "START",
        description: "Literally you probably haven't heard of them jean shorts",
        price: "Free",
        features: [
            "Vexillologist pitchfork",
            "Tumeric plaid portland",
            "Mixtape chillwave tumeric"
        ],
        button: {
            title: "Button",
            onClick: () => { alert("Button 'Free' clicked") }
        },
        image: "https://dummyimage.com/720x400",
        category: "Annually",
        disabled: true
    }, {
        title: "PRO",
        description: "Literally you probably haven't heard of them jean shorts",
        price: "$38",
        unit: "mo",
        popular: "POPULAR",
        features: [
            "Vexillologist pitchfork",
            "Tumeric plaid portland",
            "Mixtape chillwave tumeric",
            "Hexagon neurtra unicorn"
        ],
        button: {
            title: "Button",
            onClick: () => { alert("Button '$38' clicked") }
        },
        image: "https://dummyimage.com/720x400",
        category: "Monthly"
    }, {
        title: "PRO",
        description: "Literally you probably haven't heard of them jean shorts",
        price: "$380",
        unit: "yr",
        popular: "POPULAR",
        features: [
            "Vexillologist pitchfork",
            "Tumeric plaid portland",
            "Mixtape chillwave tumeric",
            "Hexagon neurtra unicorn"
        ],
        button: {
            title: "Button",
            onClick: () => { alert("Button '$380' clicked") }
        },
        image: "https://dummyimage.com/720x400",
        category: "Annually"
    }, {
        title: "BUSINESS",
        description: "Literally you probably haven't heard of them jean shorts",
        price: "$56",
        unit: "mo",
        features: [
            "Vexillologist pitchfork",
            "Tumeric plaid portland",
            "Mixtape chillwave tumeric",
            "Hexagon neurtra unicorn",
            "Happenstance arrugla bowl"
        ],
        button: {
            title: "Button",
            onClick: () => { alert("Button '$56' clicked") }
        },
        image: "https://dummyimage.com/720x400",
        category: "Monthly"
    }, {
        title: "BUSINESS",
        description: "Literally you probably haven't heard of them jean shorts",
        price: "$560",
        unit: "yr",
        features: [
            "Vexillologist pitchfork",
            "Tumeric plaid portland",
            "Mixtape chillwave tumeric",
            "Hexagon neurtra unicorn",
            "Happenstance arrugla bowl"
        ],
        button: {
            title: "Button",
            onClick: () => { alert("Button '$560' clicked") }
        },
        image: "https://dummyimage.com/720x400",
        category: "Annually"
    }, {
        title: "SPECIAL",
        description: "Literally you probably haven't heard of them jean shorts",
        price: "$72",
        unit: "mo",
        features: [
            "Vexillologist pitchfork",
            "Tumeric plaid portland",
            "Mixtape chillwave tumeric",
            "Hexagon neurtra unicorn",
            "Happenstance arrugla bowl"
        ],
        button: {
            title: "Button",
            onClick: () => { alert("Button '$72' clicked") }
        },
        image: "https://dummyimage.com/720x400",
        category: "Monthly"
    }, {
        title: "SPECIAL",
        description: "Literally you probably haven't heard of them jean shorts",
        price: "$720",
        unit: "yr",
        features: [
            "Vexillologist pitchfork",
            "Tumeric plaid portland",
            "Mixtape chillwave tumeric",
            "Hexagon neurtra unicorn",
            "Happenstance arrugla bowl"
        ],
        button: {
            title: "Button",
            onClick: () => { alert("Button '$720' clicked") }
        },
        image: "https://dummyimage.com/720x400",
        category: "Annually"
    }]

    const [category, setCategory] = useState(_starting)

    return (
        <section className={"text-gray-600 body-font overflow-hidden " + (className ? className : "")}>
            <div className="container px-5 py-24 w-full mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    {typeof _title === 'string' ?
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">{_title}</h1> :
                        _title
                    }
                    {typeof _description === 'string' ?
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">{_description}</p> :
                        _description
                    }
                    {_interval &&
                        <div className="flex mx-auto border-2 border-blue-500 rounded overflow-hidden mt-6" style={_bdcolor}>
                            {_categories.map((c, i) => {
                                const focus = c === category ? "bg-blue-500 text-white" : ""
                                const sfocus = c === category ? _bgcolor : {}
                                return (
                                    <button className={"py-1 px-4 focus:outline-none " + focus} style={sfocus} key={i} onClick={() => setCategory(c)}>
                                        {c}
                                    </button>
                                )
                            })}
                        </div>
                    }
                </div>
                <div className="flex justify-center flex-wrap -m-4">
                    {_cards.filter(c => {
                        if (c.category === category) return c
                    }).map((c, i) => {
                        const popular = c.popular ? "border-blue-500" : ""
                        const spopular = c.popular ? _bdcolor : {}

                        return (
                            <div className="p-4 xl:w-1/4 md:w-1/2 w-full" key={i}>
                                <div className={"h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden " + popular} style={spopular}>
                                    {popular !== "" &&
                                        <span className="bg-blue-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl" style={_bgcolor}>{c.popular}</span>
                                    }
                                    {typeof c.title === 'string' ?
                                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{c.title}</h2> :
                                        c.title
                                    }
                                    {typeof c.price === 'string' ?
                                        <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                            <span>{c.price}</span>
                                            {c.unit && <span className="text-lg ml-1 font-normal text-gray-500">/{c.unit}</span>}
                                        </h1> :
                                        c.price
                                    }
                                    {c.disabled && <p className="text-sm text-gray-800 mb-3">This tier is not available.</p>}
                                    {typeof c.image === "string" ?
                                        <img className="lg:h-48 md:h-36 w-full mb-4 object-cover object-center" src={c.image} alt="tier" /> :
                                        c.image !== undefined && c.image
                                    }
                                    <div className="mb-4">
                                        {c.features.map((f, i) => {
                                            const tag = typeof f === 'string' ?
                                                <p className="flex items-center text-gray-600 mb-2" key={i}>
                                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                                        <CheckIcon className="w-3 h-3" />
                                                    </span> {f}
                                                </p> : f

                                            return tag
                                        })}
                                    </div>

                                    {typeof c.button.title === 'string' ?
                                        <button disabled={c.disabled} 
                                            className={"flex items-center mt-auto text-white border-0 py-2 px-4 w-full focus:outline-none " +
                                            (c.disabled ? "bg-gray-300 " : "bg-gray-400 hover:bg-gray-500") +" rounded " + (popular === "" ? '' : "bg-blue-500")} 
                                            style={popular === "" ? {} : _bgcolor}
                                            onClick={c.button.onClick ? c.button.onClick : () => { }}>
                                            {c.button.title}
                                            <ArrowSmRightIcon className="ml-4 h-5 w-5" />
                                        </button> :
                                        c.button
                                    }

                                    <p className="text-xs text-gray-500 mt-3">{c.description}</p>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </section>
    )
}