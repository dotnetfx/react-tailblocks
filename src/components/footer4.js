import React from 'react'
import Logo from './logo1'
import { Facebook, Twitter, Instagram, LinkedIn } from './icons'

export default function Footer4({ options, className }) {
    const _options = options || {
        logo: <Logo />,
        copyright: "© 2020 Tailblocks",
        facebook: "react-tailblocks",
        twitter: "react-tailblocks",
        instagram: "react-tailblocks",
        linkedin: "react-tailblocks"
    }

    return (
        <footer className={"text-gray-600 body-font" + className}>
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                { _options.logo }
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">{ _options.copyright } 
                    { _options.twitter && 
                        <span> - 
                            <a href={"https://twitter.com/" + _options.twitter} className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@{ _options.twitter }</a>
                        </span>
                    }
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    { _options.facebook &&
                        <a className="text-gray-500" href={"https://facebook.com/" + _options.facebook } target="_blank">
                            <Facebook />
                        </a>
                    }
                    { _options.twitter &&
                        <a className="ml-3 text-gray-500" href={ "https://twitter.com/" + _options.twitter } target="_blank">
                            <Twitter />
                        </a>
                    }
                    { _options.instagram && 
                        <a className="ml-3 text-gray-500" href={ "https://instagram.com/" + _options.instagram } target="_blank">
                            <Instagram />
                        </a>
                    }
                    { _options.linkedin && 
                        <a className="ml-3 text-gray-500" href={ "https://linkedin.com/" + _options.linkedin } target="_blank">
                            <LinkedIn />
                        </a>
                    }
                </span>
            </div>
        </footer>
    )
}