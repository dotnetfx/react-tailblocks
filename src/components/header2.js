import React from 'react'
import Logo from './logo1'
import { ArrowSmRightIcon } from '@heroicons/react/outline'

export default function Header2({ button, logo, menu, className }) {
    const _button = button || 
        <button className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 
            rounded text-base text-white mt-4 md:mt-0">
                Button
            <ArrowSmRightIcon className="ml-4 h-5 w-5" />
        </button>
    
    const _logo = logo || <Logo />
    
    const _menu = menu || [
        <a className="mr-5 hover:text-gray-900" href="https://google.com" key="1">First Link</a>,
        <a className="mr-5 hover:text-gray-900" href="https://google.com" key="2">Second Link</a>,
        <a className="mr-5 hover:text-gray-900" href="https://google.com" key="3">Third Link</a>,
        <a className="mr-5 hover:text-gray-900" href="https://google.com" key="4">Fourth Link</a>
    ]

    return (
        <header className={"text-gray-600 body-font " + className}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                { _logo }
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base 
                    justify-center">
                    { _menu.map((m) => m)}
                </nav>
                {_button}
            </div>
        </header>
    )
}