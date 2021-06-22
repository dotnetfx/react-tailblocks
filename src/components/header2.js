import React from 'react'
import Logo from './logo1'
import { ArrowSmRightIcon } from '@heroicons/react/outline'

export default function Header2({ button, logo, menu, className, fixed, inverse }) {
    let _button = 
        <button className="inline-flex items-center bg-gray-100 text-gray-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 
            rounded text-base mt-4 md:mt-0">
                Button
            <ArrowSmRightIcon className="ml-4 h-5 w-5" />
        </button>

    if (button !== undefined) {
        if (button && typeof button.title === "string") {
            _button = 
                <button className="inline-flex items-center bg-gray-100 text-gray-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 
                    rounded text-base mt-4 md:mt-0" onClick={button.onClick ? button.onClick : ()=>{}}>
                        {button.title}
                    <ArrowSmRightIcon className="ml-4 h-5 w-5" />
                </button>
        } else {
            _button = button
        }
    }
    
    const _logo = logo || <Logo />
    
    const _menu = menu === undefined ? [
        <a className="mr-5 hover:text-gray-900" href="https://google.com" key="1">First Link</a>,
        <a className="mr-5 hover:text-gray-900" href="https://google.com" key="2">Second Link</a>,
        <a className="mr-5 hover:text-gray-900" href="https://google.com" key="3">Third Link</a>,
        <a className="mr-5 hover:text-gray-900" href="https://google.com" key="4">Fourth Link</a>
    ] : menu

    const borderStyle = _menu && _menu.length ? "md:border-l md:border-white-400" : ""
    const fixedStyle = fixed ? "fixed " : ""
    const inverseStyle = inverse ? "text-white bg-blue-500 " : "text-blue-500 bg-white "

    return (
        <header className={"body-font shadow-md z-50 w-full " + fixedStyle + inverseStyle + className}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                { _logo }
                <nav className={"md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center " + borderStyle}>
                    { _menu && _menu.map((m) => m)}
                </nav>
                { _button }
            </div>
        </header>
    )
}