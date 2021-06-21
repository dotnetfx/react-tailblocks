import React from 'react'
import { AcademicCapIcon } from '@heroicons/react/outline'

export default function Logo1({ title, image, inverse, className }) {
    const txtClass = inverse ? "text-white " : "text-gray-900 ";
    const svgClass = inverse ? "text-blue-500 bg-white " : "text-white bg-blue-500 ";

    const _title = title || "React Tailblocks"
    const _svg = image || <AcademicCapIcon className={"w-10 h-10 rounded-full p-2 " + svgClass} />

    return (
        <a className={"flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0 " + txtClass + className}>
            {_svg}
            <span className="ml-3 text-xl">{_title}</span>
        </a>
    )
}