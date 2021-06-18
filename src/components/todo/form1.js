import React from 'react'
import { DatabaseIcon } from '@heroicons/react/solid'

export default function Form1({ options, className }) {
    const _options = options || {
        title: "Contact Information",
        description: "Please provide your contact details"
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="flex flex-col text-center w-full mb-10">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">{_options.title}</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">{_options.description}</p>
                </div>

                <div className="rounded bg-white max-w-md overflow-hidden shadow-xl p-5">
                    <form className="space-y-4" action="#" method="POST">
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div className="grid gap-6">
                                <div className="col-span-12">
                                    <label htmlFor="full_name" className="block text-sm font-medium text-gray-500">Full name</label>
                                    <input type="text" name="full_name" id="full_name" autoComplete="given-name" className="h-10 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                            </div>
                            
                            <div className="grid gap-6 pt-8">
                                <div className="col-span-12">
                                    <label htmlFor="street_1" className="block text-sm font-medium text-gray-500">Street 1</label>
                                    <input type="text" name="street_1" id="street_1" autoComplete="street" className="h-10 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div className="col-span-12">
                                    <label htmlFor="street_2" className="block text-sm font-medium text-gray-500">Street 2</label>
                                    <input type="text" name="street_2" id="street_2" autoComplete="street" className="h-10 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-500">City</label>
                                    <input type="text" name="city" id="city" autoComplete="city" className="h-10 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="state" className="block text-sm font-medium text-gray-500">State</label>
                                    <input type="text" name="state" id="state" autoComplete="state" className="h-10 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div className="col-span-4">
                                    <label htmlFor="zip" className="block text-sm font-medium text-gray-500">Zip</label>
                                    <input type="text" name="state" id="zip" autoComplete="zip" className="h-10 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                            </div>

                            <div className="grid gap-6 pt-8">
                                <div className="col-span-12">
                                    <label htmlFor="email_address" className="block text-sm font-medium text-gray-500">Email</label>
                                    <input type="text" name="email_address" id="email_address" autoComplete="email" className="h-10 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div className="col-span-12">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-500">Phone</label>
                                    <input type="text" name="phone" id="phone" autoComplete="phone" className="h-10 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
								    <DatabaseIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400" />
                                </span>
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}