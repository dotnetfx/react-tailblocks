import React from 'react'
import { CloudDownloadIcon, UserGroupIcon, DocumentIcon, LocationMarkerIcon } from '@heroicons/react/outline'

export default function Statistic3({ title, description, stats, className}) {
    const _title = title || "Master Cleanse Reliac Heirloom"
    const _description = description || "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag."

    const _stats = stats || [
        {
            title: "Downloads",
            value: "2.7K",
            icon: <CloudDownloadIcon className="text-blue-500 w-12 h-12 mb-3 inline-block" />
        }, {
            title: "Users",
            value: "1.3K",
            icon: <UserGroupIcon className="text-blue-500 w-12 h-12 mb-3 inline-block" />
        }, {
            title: "Files",
            value: "74",
            icon: <DocumentIcon className="text-blue-500 w-12 h-12 mb-3 inline-block" />
        }, {
            title: "Locations",
            value: "46",
            icon: <LocationMarkerIcon className="text-blue-500 w-12 h-12 mb-3 inline-block" />
        }
    ]

    return (
        <section className={"text-gray-600 body-font " + (className ? className : "")}>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    { typeof _title === "string" ?
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{_title}</h1> :
                        _title
                    }
                    { typeof _description === "string" ?
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{_description}</p> :
                        _description
                    }
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    { _stats.map((s, i) => (
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full" key={i}>
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    { s.icon }
                                    { typeof s.value !== "string" ?
                                        s.value :
                                        <h2 className="title-font font-medium text-3xl text-gray-900">{ s.value }</h2>
                                    }
                                    { typeof s.title === "string" ?
                                        <p className="leading-relaxed">{s.title}</p> :
                                        s.title
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}