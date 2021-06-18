import React from 'react'
import { ShoppingBagIcon } from '@heroicons/react/outline'

export default function Card2({ options, className }) {
    const _options = options || {
        title: "Inventory",
        content: 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a erat a mauris varius facilisis. Donec ac nisi ac mauris varius accumsan id ut leo.</p>,
        icon: 
            <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                <ShoppingBagIcon className="h-8 w-8" />
            </div>
    }

    return (
        <div className={"flex items-center px-5 py-6 shadow-sm rounded-md bg-white " + className}>
            {_options.icon}
            <div className="mx-5">
                <h4 className="text-2xl font-semibold text-gray-700">{_options.title}</h4>
                {_options.content}
            </div>
        </div>
    )
}