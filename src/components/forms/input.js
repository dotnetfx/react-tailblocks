import React from 'react'
import { useFormContext } from "react-hook-form";

export default function Input({ name, type, prefix, label, value, placeHolder, className, inputClass, labelClass, errorClass, descriptionClass, checked, disabled, options, description }) {
    const { register, formState: { errors } } = useFormContext()

    return (
        <div className={"mt-2 " + className}>

            {type === 'checkbox' || type === "radio"?
                <React.Fragment>
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id={name} name={name} type={type} {...register(name, options)} value={value} placeholder={placeHolder} checked={checked} disabled={disabled}
                                className={"focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded " + inputClass}
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor={name} className={"font-medium text-gray-700 " + labelClass}>{label}</label>
                            <p className="text-gray-500">{description}</p>
                        </div>
                    </div>
                    <p className={"text-red-400 font-medium text-sm " + errorClass}>{errors[name]?.message}</p>
                </React.Fragment> :
                <React.Fragment>
                    <label htmlFor={name}
                        className={"block text-sm font-medium text-gray-600 " + labelClass}>
                        {label}
                    </label>
                    {prefix ?
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">{prefix}</span>
                            <input id={name} name={name} type={type} {...register(name, options)} value={value} placeholder={placeHolder} checked={checked} disabled={disabled}
                                className={"text-gray-700 p-3 focus:ring-blue-500 focus:border-blue-500 shadow-sm flex-1 block w-full rounded-none rounded-r-md sm:text-sm border border-gray-300 " + inputClass}
                            />
                        </div> :

                        <input id={name} name={name} type={type} {...register(name, options)} value={value} placeholder={placeHolder} checked={checked} disabled={disabled}
                            className={"text-gray-700 p-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300" + inputClass}
                        />
                    }
                    <p className={"text-red-400 font-medium text-sm " + errorClass}>{errors[name]?.message}</p>
                    <p className={"text-gray-400 font-medium text-sm " + descriptionClass}>{description}</p>
                </React.Fragment>

            }
        </div>
    )
}