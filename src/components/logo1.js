import React from 'react'
import { AcademicCapIcon } from '@heroicons/react/outline'

export default function Logo1({ title, image, className }) {
    const _title = title || "React Tailblocks"
    const _svg = image || <AcademicCapIcon className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" />

    return (
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            {_svg}
            <span className="ml-3 text-xl">{_title}</span>
        </a>
    )
}