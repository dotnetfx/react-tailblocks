import React from 'react'
import Form from './forms/form'
import Input from './forms/input'
import TextArea from './forms/text-area'
import Select from './forms/select'
import { UserCircleIcon, PhotographIcon } from '@heroicons/react/outline'

export default function Form1({ className, panels }) {
    const _panels = panels || [{
        title: <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>,
        description: 
            <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what you share.
            </p>,
        content:
            <Form onSubmit={(data) => { console.log(data) }}>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-3 sm:col-span-2">
                                <Input name="website" label="Website" prefix="http://" placeHolder="www.example.com" />
                            </div>
                        </div>

                        <TextArea name="about" label="About" placeHolder="All about you" description="Brief description for your profile. URLs are hyperlinked." />

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Photo
                            </label>
                            <div className="mt-1 flex items-center">
                                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                    <UserCircleIcon className="h-full w-full text-gray-300" />
                                </span>
                                <button type="button" className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Change
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Cover photo
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <PhotographIcon className="mx-auto h-12 w-12 text-gray-400" />
                                    <div className="flex text-sm text-gray-600">
                                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Save
                        </button>
                    </div>
                </div>
            </Form>
    }, {
        title: <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>,
        description: 
            <p className="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive mail.
            </p>,
        content:
            <Form onSubmit={(data) => { console.log(data) }}>
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <Input name="firstName" label="First name" />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <Input name="lastName" label="Last name" />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                                <Input name="email" type="email" label="Email address" />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <Select name="country" label="Contry/Region">
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </Select>
                            </div>

                            <div className="col-span-6">
                                <Input name="street" label="Street address" />
                            </div>

                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                <Input name="city" label="City" />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Input name="state" label="State/Province" />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Input name="postal" label="Zip / Postal" />
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Save
                        </button>
                    </div>
                </div>
            </Form>
    }, {
        title: <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>,
        description:
            <p className="mt-1 text-sm text-gray-600">
                Decide which communications you'd like to receive and how.
            </p>,
        content:
            <Form onSubmit={(data) => { console.log(data) }}>
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <fieldset>
                            <legend className="text-base font-medium text-gray-900">By Email</legend>
                            <div className="mt-4 space-y-4">
                                <Input name="comments" type="checkbox" label="Comments" description="Get notified when someone posts a comment." />
                                <Input name="candidates" type="checkbox" label="Candidates" description="Get notified when a candidate applies for a job." />
                                <Input name="offers" type="checkbox" label="Offers" description="et notified when a candidate accepts or rejects an offer." />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div>
                                <legend className="text-base font-medium text-gray-900">Push Notifications</legend>
                                <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                            </div>
                            <div className="mt-4 space-y-4">
                                <Input name="pushEverything" type="radio" label="Everything" />
                                <Input name="pushEmail" type="radio" label="Same as email" />
                                <Input name="pushNothing" type="radio" label="No push notifications" />
                            </div>
                        </fieldset>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Save
                        </button>
                    </div>
                </div>
            </Form>
    }]

    return (
        <div className={"bg-gray-100 p-8 " + className}>
            { _panels.map((p, i) => (
                <React.Fragment key={i}>
                    <div>
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    { typeof p.title === 'string' ?
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">{p.title}</h3> :
                                        p.title
                                    }
                                    { typeof p.description === 'string' ?
                                        <p className="mt-1 text-sm text-gray-600">{p.description}</p> :
                                        p.description
                                    }
                                </div>
                            </div>
                            <div className="mt-5 md:mt-0 md:col-span-2">
                               { p.content }
                            </div>
                        </div>
                    </div>

                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                            <div className="border-t border-gray-200"></div>
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
}