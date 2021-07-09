import React from 'react'
import { useFormContext } from "react-hook-form";

export default function Select({ name, label, className, inputClass, labelClass, errorClass, descriptionClass, disabled, options, size, children, description }) {
    const { register, formState:{ errors } } = useFormContext()

    return (
        <div className={"mt-2 " + className}>
            <label htmlFor={name} 
                className={"block text-sm font-medium text-gray-600 " + labelClass}>
                    {label}
            </label>
            <select id={name} name={name} {...register(name, options)} disabled={disabled} size={size}
                className={"text-gray-700 p-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300" + inputClass} 
            >
                {children}
            </select>
            <p className={"text-red-400 font-medium text-sm " + errorClass}>{errors[name]?.message}</p>
            <p className={"text-gray-400 font-medium text-sm " + descriptionClass}>{description}</p>
        </div>
    )
}