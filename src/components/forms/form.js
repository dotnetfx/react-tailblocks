import React from 'react'
import { useForm, FormProvider } from "react-hook-form";

export default function Form({ children, onSubmit }) {
    const methods = useForm()
    const { handleSubmit } = methods

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
}