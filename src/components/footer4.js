import React from 'react'
import Logo from './logo1'
import { FacebookSvg, TwitterSvg, InstagramSvg, LinkedInSvg } from './svgs'

export default function Footer4({ logo, copyright, facebook, twitter, instagram, linkedin, className }) {
    const _logo = logo || <Logo />
    const _copyright = copyright || "© 2020 Tailblocks"
    const _facebook = facebook || "react-tailblocks"
    const _twitter = twitter || "react-tailblocks"
    const _instagram = instagram || "react-tailblocks"
    const _linkedin = linkedin || "react-tailblocks"

    return (
        <footer className={"text-gray-600 body-font" + className}>
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                { _logo }
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">{ _copyright } 
                    { _twitter && 
                        <span> - 
                            <a href={"https://twitter.com/" + _twitter} className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@{ _twitter }</a>
                        </span>
                    }
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    { _facebook &&
                        <a className="text-gray-500" href={"https://facebook.com/" + _facebook } target="_blank">
                            <FacebookSvg />
                        </a>
                    }
                    { _twitter &&
                        <a className="ml-3 text-gray-500" href={ "https://twitter.com/" + _twitter } target="_blank">
                            <TwitterSvg />
                        </a>
                    }
                    { _instagram && 
                        <a className="ml-3 text-gray-500" href={ "https://instagram.com/" + _instagram } target="_blank">
                            <InstagramSvg />
                        </a>
                    }
                    { _linkedin && 
                        <a className="ml-3 text-gray-500" href={ "https://linkedin.com/" + _linkedin } target="_blank">
                            <LinkedInSvg />
                        </a>
                    }
                </span>
            </div>
        </footer>
    )
}