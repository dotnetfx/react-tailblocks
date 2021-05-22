import React from 'react'
import Logo from './logo1'
import { ArrowSmRightIcon } from '@heroicons/react/outline'

export default function Header2({ options, className }) {
    const _options = options || {
        button: {
            title: "Button",
            onClick: () => {}
        },
        logo: <Logo />,
        menu: [
            {
                title: "First Link",
                link: "https://google.com"
            },
            {
                title: "Second Link",
                link: "https://google.com"
            },
            {
                title: "Third Link",
                link: "https://google.com"
            },
            {
                title: "Fourth Link",
                link: "https://google.com"
            }
        ]
    }

    return (
        <header className={"text-gray-600 body-font " + className}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                { _options.logo }
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base 
                    justify-center">
                    { _options.menu.map((m, i) => (
                        <a className="mr-5 hover:text-gray-900" href={m.link} key={i}>{m.title}</a>
                    ))}
                </nav>
                <button className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 
                    rounded text-base text-white mt-4 md:mt-0" onClick={_options.button.onClick}>{_options.button.title}
                    <ArrowSmRightIcon className="ml-4 h-5 w-5" />
                </button>
            </div>
        </header>
    )
}