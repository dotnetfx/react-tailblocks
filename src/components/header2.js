import React, { useState } from 'react'
import Logo from './logo1'
import { ArrowSmRightIcon, MenuIcon } from '@heroicons/react/outline'

export default function Header2({ button, logo, menu, className, fixed, inverse }) {
    const [show, setShow] = useState(true) //window ? window.innerWidth >= 768: true);
    const btnStyle = inverse ? "bg-gray-100 text-gray-600 hover:bg-gray-200" : "bg-blue-500 text-white hover:bg-blue-200"

    let _button =
        <button className={"flex justify-between items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 " + btnStyle}>
            Button
            <ArrowSmRightIcon className="ml-4 h-5 w-5" />
        </button>

    if (button !== undefined) {
        if (button && typeof button.title === "string") {
            _button =
                <button className={"flex justify-between items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 " + btnStyle}
                    onClick={button.onClick ? button.onClick : () => { }}>
                    {button.title}
                    <ArrowSmRightIcon className="ml-4 h-5 w-5" />
                </button>
        } else {
            _button = button
        }
    }

    const _logo = logo || <Logo inverse={inverse} />

    const _menu = menu === undefined ? [
        <a className="md:mr-5 mb-2 md:mb-0 hover:text-gray-900 text-gray-500" href="https://google.com" key="1">First Link</a>,
        <a className="md:mr-5 mb-2 md:mb-0 hover:text-gray-900 text-gray-500" href="https://google.com" key="2">Second Link</a>,
        <a className="md:mr-5 mb-2 md:mb-0 hover:text-gray-900 text-gray-500" href="https://google.com" key="3">Third Link</a>,
        <a className="md:mr-5 mb-2 md:mb-0 hover:text-gray-900 text-gray-500" href="https://google.com" key="4">Fourth Link</a>
    ] : menu

    const borderStyle = _menu && _menu.length ? "md:border-l md:border-white-400" : ""
    const fixedStyle = fixed ? "md:fixed " : ""
    const inverseStyle = inverse ? "text-white bg-blue-500 " : "text-blue-500 bg-white "

    return (
        <header className={"body-font shadow-md z-50 w-full" + fixedStyle + inverseStyle + className}>
            <div className="p-3 md:p-5 flex flex-col md:flex-row">
                <div className="flex justify-between md:justify-start">
                    {_logo}
                    <MenuIcon className={"h-4 w-4 md:hidden mt-3 " + inverseStyle} onClick={() => {
                        setShow(!show)
                    }} />
                </div>

                {show &&
                    <React.Fragment>
                        <nav className={"md:mr-auto md:ml-4 md:py-2 md:pl-4 flex flex-col md:flex-row items-center mt-4 md:mt-0 " + borderStyle}>
                            {_menu && _menu.map((m) => m)}
                        </nav>
                        {_button}
                    </React.Fragment>
                }
            </div>
        </header>
    )
}