import React from 'react'
import { CubeIcon } from '@heroicons/react/outline'

export default function Logo1({ title, image, inverse, className, href }) {
    const txtClass = inverse ? "text-white " : "text-gray-900 "
    const svgClass = inverse ? "text-blue-500 bg-white " : "text-white bg-blue-500 "

    const _title = title || "React Tailblocks"
    const _svg = image || <CubeIcon className={"w-10 h-10 rounded-full p-2 " + svgClass} />
    const _href = href || "/"

    return (
        <a href={_href} className={"flex order-first title-font font-medium items-center " + txtClass + (className ? className : "")}>
            {_svg}
            <span className="ml-3 text-xl">{_title}</span>
        </a>
    )
}
