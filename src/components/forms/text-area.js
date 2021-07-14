import React, { useEffect, useState } from 'react'
import { useFormContext } from "react-hook-form";

export default function TextArea({ name, label, value, placeHolder, className, inputClass, labelClass, errorClass, descriptionClass, disabled, options, maxLength, description, onChange }) {
    const { register, formState: { errors }, getValues, editing } = useFormContext()
    return (
        <div className={"mt-2 " + className}>
            <label htmlFor={name}
                className={"block text-sm font-medium text-gray-600 " + labelClass}>
                {label}
            </label>
            {editing ?
                <React.Fragment>
                    <textarea id={name} name={name} {...register(name, options)} value={value} placeholder={placeHolder} disabled={disabled} maxLength={maxLength} onChange={onChange}
                        className={"text-gray-700 p-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300" + inputClass}
                    />
                    <p className={"text-red-400 font-medium text-sm " + errorClass}>{errors[name]?.message}</p>
                    <p className={"text-gray-400 font-medium text-sm " + descriptionClass}>{description}</p>
                </React.Fragment> :
                <p>{getValues(name)}</p>
            }
        </div>
    )
}