import React from 'react'
import { ShoppingBagIcon } from '@heroicons/react/outline'

export default function Card1({ title, value, icon, className }) {
    const _title  = title || "Inventory"
    const _value = value || "23,282"
    const _icon = icon ||
        <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
            <ShoppingBagIcon className="h-8 w-8" />
        </div>

    return (
        <div className={"flex items-center px-5 py-6 shadow-sm rounded-md bg-white " + (className ? className : "")}>
            {_icon}
            <div className="mx-5">
                { typeof _value === "string" ?
                    <h4 className="text-2xl font-semibold text-gray-700">{_value}</h4> :
                    _value
                }
                { typeof _title === "string" ?
                    <div className="text-gray-500">{_title}</div> :
                    _title
                }
            </div>
        </div>
    )
}