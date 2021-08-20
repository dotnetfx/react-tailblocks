import React, { useEffect, useState } from 'react'
import { useFormContext } from "react-hook-form";

export default function TextArea({ name, label, value, placeHolder, className, inputClass, labelClass, errorClass, descriptionClass, disabled, options, maxLength, description, onChange, onBlur, onFocus }) {
    const { register, formState: { errors }, getValues, editing } = useFormContext()
    const { onChange: onc, onBlur: onb, ref, name: nm} = register(name, options)

    return (
        <div className={"mt-2 " + (className ? className : "")}>
            <label htmlFor={name}
                className={"block text-sm font-medium text-gray-600 " + labelClass}>
                {label}
            </label>
            {editing ?
                <React.Fragment>
                    <textarea id={name} name={nm} ref={ref} value={value} placeholder={placeHolder} disabled={disabled} maxLength={maxLength}
                        onChange={(e) => { onc(e); if (onChange) onChange(e) }}
                        onBlur={(e) => { onb(e); if (onBlur) onBlur(e) }}
                        onFocus={(e) => { if (onFocus) onFocus(e) }}
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