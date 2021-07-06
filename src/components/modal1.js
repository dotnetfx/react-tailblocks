import React from 'react'
import { ExclamationIcon } from '@heroicons/react/outline'

export default function Modal1({ options, className, show, header, icon, content, footer }) {
    const _header = header ||
        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
            "Deactivate Account"
        </h3>

    const _icon = icon ||
        <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <ExclamationIcon className="h-6 w-6 text-red-600" />
        </div>

    const _content = content ||
        <p className="text-sm text-gray-500">
            "Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."
        </p>

    const _footer = footer || 
        <React.Fragment>
            <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                Deactivate
            </button>
            <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                Cancel
            </button>
        </React.Fragment>

    const onSubmit = ()=>{}

    return (
        <React.Fragment>
            { show &&
                <div className={"fixed z-10 inset-0 overflow-y-auto" + className} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <form onSubmit={(e) => { if (_onSubmit) return _onSubmit(e) }}>
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        {_icon}
                                        <div className="mt-3 text-center w-full sm:mt-0 sm:ml-4 sm:text-left">
                                            {_header}
                                            <div className="mt-2">
                                                {_content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    {_footer}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}