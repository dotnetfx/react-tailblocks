import React from 'react'
import { ArrowSmRightIcon, EyeIcon, ChatIcon } from '@heroicons/react/outline'

export default function Blog1({ title, items, className, cardClass }) {
    const _title = title ||
        <h1 className="pt-24 sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
            Effervescent Blog Articles
        </h1>

    const _cardClass = cardClass || "md:w-1/3"
    const _items = items || [
        {
            title: "The Catalyzer",
            category: "Category",
            description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            image: "https://dummyimage.com/720x400",
            more: "Learn More",
            views: "1200",
            comments: "6"
        }, {
            title: "The 400 Blows",
            category: "Category",
            description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            image: "https://dummyimage.com/720x400",
            more: "Learn More",
            views: "1200",
            comments: "6"
        }, {
            title: "Shooting Stars",
            category: "Category",
            description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            image: "https://dummyimage.com/720x400",
            more: "Learn More",
            views: "1.2K",
            comments: "6"
        }
    ]

    return (
        <section className={"text-gray-600 body-font " + (className ? className : "")}>
            <div className="container px-5 py-24 mx-auto">
                {typeof _title === "string" ?
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">{_title}</h1> :
                    _title
                }
                <div className="flex flex-wrap -m-4">
                    {_items.map((d, i) => (
                        <div className={"p-4 " + _cardClass} key={i}>
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <div className="flex flex-col h-full">
                                    {typeof d.image === "string" ?
                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={d.image} alt="blog" /> :
                                        d.image
                                    }
                                    {typeof d.category === "string" ?
                                        <h2 className="px-6 pt-4 uppercase tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{d.category}</h2> :
                                        d.category
                                    }
                                    {typeof d.title === "string" ?
                                        <h1 className="px-6 title-font text-lg font-medium text-gray-900 mb-3">{d.title}</h1> :
                                        d.title
                                    }
                                    {typeof d.description === "string" ?
                                        <p className="px-6 leading-relaxed mb-3 flex-grow">{d.description}</p> :
                                        d.description
                                    }
                                    <div className="flex items-center flex-wrap px-6 py-4">
                                        {typeof d.more === "string" ?
                                            <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">{d.more}
                                                <ArrowSmRightIcon className="ml-4 h-5 w-5" />
                                            </a> :
                                            d.more
                                        }
                                        {typeof d.views === "string" ?
                                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1">
                                                <EyeIcon className="h-5 w-5" />{d.views}
                                            </span> :
                                            d.views
                                        }
                                        {typeof d.comments === "string" ?
                                            <span className="text-gray-400 inline-flex items-center leading-none text-sm pl-3 border-l-2 border-gray-200">
                                                <ChatIcon className="h-5 w-5" />{d.comments}
                                            </span> :
                                            d.comments
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}