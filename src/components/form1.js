import React from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'

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

                                <div className="col-span-12">
                                    <label htmlFor="email_address" className="block text-sm font-medium text-gray-500">Email address</label>
                                    <input type="text" name="email_address" id="email_address" autoComplete="email" className="h-10 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center">
                                <input id="remember_me" name="remember_me" type="checkbox" className="h-10 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-500">
                                    Remember me
							    </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                    Forgot your password?
							    </a>
                            </div>
                        </div>


                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
								    <LockClosedIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400" />
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}