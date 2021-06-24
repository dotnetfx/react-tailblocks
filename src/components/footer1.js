import React from 'react'
import { CubeIcon } from '@heroicons/react/outline'
import { FacebookSvg, TwitterSvg, InstagramSvg, LinkedInSvg } from './svgs'

export default function Footer1({ title, description, svg, copyright, facebook, twitter, instagram, linkedin, menu, className }) {
    const _title = title || "Tailblocks"
    const _description = description || "Air plant banjo lyft occupy retro adaptogen indego"
    const _svg = svg || <CubeIcon className="w-10 h-10 rounded-full p-2 text-white bg-blue-500" />
    const _facebook = facebook === undefined ? "react-tailblocks" : facebook
    const _twitter = twitter === undefined ? "react-tailblocks" : twitter
    const _instagram = instagram === undefined ? "react-tailblocks" : instagram
    const _linkedin = linkedin === undefined ? "react-tailblocks" : linkedin
    const _menu = menu || [
        {
            category: "CATEGORY1",
            items: [
                <a className="text-gray-600 hover:text-gray-800">First Link</a>,
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>,
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>,
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
            ]
        }, {
            category: "CATEGORY2",
            items: [
                <a className="text-gray-600 hover:text-gray-800">First Link</a>,
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>,
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>,
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
            ]
        }, {
            category: "CATEGORY3",
            items: [
                <a className="text-gray-600 hover:text-gray-800">First Link</a>,
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>,
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>,
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
            ]
        }, {
            category: "CATEGORY4",
            items: [
                <a className="text-gray-600 hover:text-gray-800">First Link</a>,
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>,
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>,
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
            ]
        }
    ]

    return (
        <footer className={"text-gray-600 body-font " + className}>
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        { _svg }
                        { typeof _title === "string" ?
                            <span className="ml-3 text-xl">{_title}</span> :
                            _title
                        }
                    </a>
                    {typeof _description === "string" ?
                        <p className="mt-2 text-sm text-gray-500">{_description}</p> :
                        _description
                    }
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    {_menu.map((m, c) => (
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4" key={c}>
                            { typeof m.category === "string" ?
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">{m.category}</h2> :
                                m.category
                            }
                            <nav className="list-none mb-10">
                                {m.items.map((i, c) => (
                                    <li key={c}>
                                        { typeof i === "string" ? 
                                            <a className="text-gray-600 hover:text-gray-800">i</a> :
                                            i
                                        }
                                    </li>
                                ))}
                            </nav>
                        </div>
                    ))}
                </div>
            </div>
            { copyright &&
                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">{copyright}
                            {_twitter && twitter &&
                                <span> -
                                    <a href={"https://twitter.com/" + _twitter} className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@{_twitter}</a>
                                </span>
                            }
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            {_facebook && facebook &&
                                <a className="text-gray-500" href={"https://facebook.com/" + _facebook} target="_blank">
                                    <FacebookSvg />
                                </a>
                            }
                            {_twitter && twitter &&
                                <a className="ml-3 text-gray-500" href={"https://twitter.com/" + _twitter} target="_blank">
                                    <TwitterSvg />
                                </a>
                            }
                            {_instagram && instagram && 
                                <a className="ml-3 text-gray-500" href={"https://instagram.com/" + _instagram} target="_blank">
                                    <InstagramSvg />
                                </a>
                            }
                            {_linkedin && instagram && 
                                <a className="ml-3 text-gray-500" href={"https://linkedin.com/" + _linkedin} target="_blank">
                                    <LinkedInSvg />
                                </a>
                            }
                        </span>
                    </div>
                </div>
            }
        </footer>
    )
}