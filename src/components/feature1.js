import React from 'react'
import { SparklesIcon, BeakerIcon, GlobeIcon, ArrowSmRightIcon } from '@heroicons/react/outline'

export default function Feature1({ title, features, className }) {
    const _title = title || 
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
            Raw Denim Heirloom Man Braid<br className="hidden sm:block" />Selfies Wayfarers
        </h1>

    const _features = features || [
        {
            title: "Shooting Stars",
            description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.",
            icon: <SparklesIcon className="w-6 h-6" />,
            more: 
                <a className="mt-3 text-blue-500 inline-flex items-center">Learn More
                    <ArrowSmRightIcon className="w-4 h-4 ml-2" />
                </a>
        }, {
            title: "The Catalyzer",
            description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.",
            icon: <BeakerIcon className="w-6 h-6" />,
            more: 
                <a className="mt-3 text-blue-500 inline-flex items-center">Learn More
                    <ArrowSmRightIcon className="w-4 h-4 ml-2" />
                </a>
        }, {
            title: "Neptune",
            description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.",
            icon: <GlobeIcon className="w-6 h-6" />,
            more: 
                <a className="mt-3 text-blue-500 inline-flex items-center">Learn More
                    <ArrowSmRightIcon className="w-4 h-4 ml-2" />
                </a>
        }
    ]

    return (
        <section className={"text-gray-600 body-font " + className}>
            <div className="container px-5 py-24 mx-auto">
                { typeof _title === "string" ?
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">{_title}</h1> :
                    _title
                }
                
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    { _features.map((f, i) => (
                            <div className="p-4 md:w-1/3 flex" key={i}>
                                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 flex-shrink-0">
                                    { f.icon }
                                </div>
                                <div className="flex-grow pl-6">
                                    { typeof f.title === "string" ?
                                        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{ f.title }</h2> :
                                        f.title
                                    }
                                    { typeof _features.description === "string" ?
                                        <p className="leading-relaxed text-base">{f.description}</p> :
                                        f.description
                                    }
                                    <br />
                                    { f.more }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}