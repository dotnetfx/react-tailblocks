import React from 'react'
import { EntreStacksSvg } from './svgs'

export default function Logo1({ options, className }) {
    const _options = options || {
        title: "React TailBlocks",
        svg: <EntreStacksSvg />
    }

    return (
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            {_options.svg}
            <span className="ml-3 text-xl">{_options.title}</span>
        </a>
    )
}