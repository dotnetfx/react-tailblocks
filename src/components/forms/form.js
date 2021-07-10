import React, { useState, useMemo } from 'react'
import { useForm, FormProvider } from "react-hook-form";

export default function Form({ children, onSubmit, className, cancelButton, saveButton, buttons, data }) {
    const methods = useForm()
    const { handleSubmit } = methods
    const [mutant, setMutant] = useState()
    const [original, setOriginal] = useState(data)

    useMemo(() => {
        setOriginal(data)
        setMutant(data)
    }, [data])

    methods.mutant = mutant
    console.log("mutant: ", mutant)

    if (mutant) mutant.firstName = "Jeffery"

    return (
        <FormProvider {...methods} className={className}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {children}
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    { cancelButton ?
                        cancelButton :
                        <button type="submit" className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" 
                            onClick={() => {setMutant(original)}}
                        >
                            Cancel
                        </button>
                    }
                    { saveButton ?
                        saveButton :
                        <button type="submit" className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Save
                        </button>
                    }
                    { buttons ? buttons : <React.Fragment></React.Fragment> }
                </div>
            </form>
        </FormProvider>
    )
}