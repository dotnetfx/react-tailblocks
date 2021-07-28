import React, { useEffect, useState } from 'react'
import { useFormContext } from "react-hook-form";

export default function Select({ name, label, className, inputClass, labelClass, errorClass, descriptionClass, disabled, options, items, size, description, onChange, onBlur, onFocus }) {
    const _items = items || []
    const { register, formState: { errors }, getValues, editing } = useFormContext()

    return (
        <div className={"mt-2 " + (className ? className : "")}>
            <label htmlFor={name}
                className={"block text-sm font-medium text-gray-600 " + labelClass}>
                {label}
            </label>
            {editing ?
                <select id={name} name={name} {...register(name, options)} disabled={disabled} size={size}
                    onChange={(e) => { if (onChange) onChange(e) }}
                    onBlur={(e) => { if (onBlur) onBlur(e) }}
                    onFocus={(e) => { if (onFocus) onFocus(e) }}
                    className={"text-gray-700 p-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300" + inputClass}
                >
                    {items.map((o, i) => {
                        o.selected = getValues(name) === o.title
                        return <option key={i} {...o} >{o.title}</option>
                    })}
                </select> :
                <p>{getValues(name)}</p>
            }
            <p className={"text-red-400 font-medium text-sm " + errorClass}>{errors[name]?.message}</p>
            <p className={"text-gray-400 font-medium text-sm " + descriptionClass}>{description}</p>
        </div>
    )
}