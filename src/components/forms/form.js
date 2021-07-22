import React, { useEffect, useState } from 'react'
import { useForm, FormProvider } from "react-hook-form";

export default function Form({ children, onSubmit, className, cancelButton, saveButton, editButton, buttons, options, managed, editing }) {
    const _managed = managed === undefined ? true : managed
    const _options = options || { defaultValues: {} }
    const methods = useForm(options)
    const { handleSubmit } = methods

    const [_editing, setEditing] = useState(editing)
    if (!_options.defaultValues) _options.defaultValues = {}

    useEffect(() => {
        setEditing(editing)
    }, [editing])

    const _context = { editing: _editing, ...methods }

    return (
        <FormProvider {..._context} className={className}>
            <form onSubmit={handleSubmit((e) => {
                setEditing(false)
                onSubmit(e)
            })}>
                {children}
                {_managed &&
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <React.Fragment>
                            {cancelButton ?
                                cancelButton :
                                <React.Fragment>
                                    {_editing &&
                                        <button type="button" className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                            onClick={() => {
                                                methods.reset(_options.defaultValues)
                                                setEditing(false)
                                            }}
                                        >
                                            Cancel
                                        </button>
                                    }
                                </React.Fragment>
                            }
                            {saveButton ?
                                saveButton :
                                <React.Fragment>
                                    {_editing &&
                                        <button type="submit" className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                            Save
                                        </button>
                                    }
                                </React.Fragment>
                            }
                            {editButton ?
                                editButton :
                                <React.Fragment>
                                    {!_editing &&
                                        <button type="button" className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                            onClick={() => {
                                                setEditing(true)
                                            }
                                            }
                                        >
                                            Edit
                                        </button>
                                    }
                                </React.Fragment>
                            }
                        </React.Fragment>
                        {buttons ? buttons : <React.Fragment></React.Fragment>}
                    </div>
                }
            </form>
        </FormProvider>
    )
}