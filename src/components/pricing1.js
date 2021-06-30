import React, { useState } from 'react'
import { ArrowSmRightIcon, CheckIcon } from '@heroicons/react/outline'

export default function Pricing1({ title, description, categories, cards }) {

    const _title = title || "Pricing"
    const _description = description || "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical."
    const _categories = categories || [
        "Monthly",
        "Annually"
    ]
    
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
        category: "Monthly"
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
        category: "Annually"
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
        category: "Annually"
    }]

    const [category, setCategory] = useState(_categories[0]);

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    { typeof _title === 'string' ? 
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">{_title}</h1> :
                        _title
                    }
                    { typeof _description === 'string' ?
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">{_description}</p> :
                        _description
                    }
                    <div className="flex mx-auto border-2 border-blue-500 rounded overflow-hidden mt-6">
                        { _categories.map((c, i) => {
                            const focus = c === category ? "bg-blue-500 text-white" : ""
                            return (
                                <button className={"py-1 px-4 focus:outline-none " + focus} key={i} onClick={() => setCategory(c)}>
                                    {c}
                                </button>
                            )
                        })}
                    </div>
                </div>
                <div className="flex flex-wrap -m-4">
                    { _cards.filter(c => {
                            if (c.category === category) return c
                        }).map((c, i) => {
                            const popular = c.popular ? "border-blue-500" : "";
                            return (
                                <div className="p-4 xl:w-1/4 md:w-1/2 w-full" key={i}>
                                    <div className={"h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden " + popular}>
                                        { popular !== "" &&
                                            <span className="bg-blue-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">{c.popular}</span>
                                        }
                                        { typeof c.title === 'string' ?
                                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{c.title}</h2> :
                                            c.title
                                        }
                                        { typeof c.price === 'string' ?
                                            <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                                <span>{c.price}</span>
                                                {c.unit && <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>}
                                            </h1> :
                                            c.price
                                        }
                                        { c.features.map((f, i) => {
                                            const tag = typeof f === 'string' ?
                                                <p className="flex items-center text-gray-600 mb-2" key={i}>
                                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                                        <CheckIcon className="w-3 h-3" />
                                                    </span> {f}
                                                </p> : f

                                            return tag
                                        })}
                                        
                                        { typeof c.button.title === 'string' ? 
                                            <button className={"flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 " +
                                                " rounded " + (popular === "" ? '' : "bg-blue-500")} onClick={c.button.onClick ? c.button.onClick : ()=>{}}>
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