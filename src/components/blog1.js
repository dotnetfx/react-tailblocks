import React from 'react'
import { ArrowRight, View, Comment } from './icons'

export default function Blog1({ options, className }) {
    const _options = options || [
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

    return (
        <section className={"text-gray-600 body-font" + className}>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    { _options.map((d, i) => (
                            <div className="p-4 md:w-1/3" key={i}>
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={d.image} alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{d.category}</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{d.title}</h1>
                                        <p className="leading-relaxed mb-3">{d.description}</p>
                                        <div className="flex items-center flex-wrap ">
                                            <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">{d.more}
                                                <ArrowRight />
                                            </a>
                                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                <View />{d.views}
                                            </span>
                                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                <Comment />{d.comments}
                                            </span>
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