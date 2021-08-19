import React, { useState } from 'react'
import { ShieldCheckIcon, TrendingUpIcon, CloudDownloadIcon, UserIcon } from '@heroicons/react/outline'

export default function Steps3({ title, steps, className }) {
    const _title = title ||
        <h1 className="pt-24 sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
            As Simple as One, Two, Three, Four
        </h1>

    const _steps = steps || [{
        title: "Shooting Stars",
        description: "VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.",
        step: "1",
        icon: <ShieldCheckIcon className="w-12 h-12" />
    }, {
        title: "The Catalyzer",
        description: "VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.",
        step: "2",
        icon: <TrendingUpIcon className="w-12 h-12" />
    }, {
        title: "The 400 Blows",
        description: "VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.",
        step: "3",
        icon: <CloudDownloadIcon className="w-12 h-12" />
    }, {
        title: "Neptune",
        description: "VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.",
        step: "4",
        icon: <UserIcon className="w-12 h-12" />
    }]

    return (
        <section className={"text-gray-600 body-font " + (className ? className : "")}>

            {typeof _title === "string" ?
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">{_title}</h1> :
                _title
            }

            <div className="container px-5 pb-24 mx-auto flex flex-wrap">
                {_steps.map((s, i) => (
                    <div key={i} className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                            {s.step}
                        </div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                {s.icon}
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                {typeof s.title === "string" ?
                                    <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">{s.title}</h2> :
                                    s.title
                                }
                                {typeof s.description === "string" ?
                                    <p className="leading-relaxed">{s.description}</p> :
                                    s.description
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}