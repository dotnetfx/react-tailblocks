import React, { useState } from 'react'
import Form from './forms/form'
import Input from './forms/input'
import TextArea from './forms/text-area'
import Select from './forms/select'
import { UserCircleIcon, PhotographIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline'

export default function Form1({ className, panels, auto, collapsible, summary, dividers, onCollapse }) {
    const _collapsible = collapsible === undefined ? true : collapsible
    const _auto = auto === undefined ? true : auto
    const _summary = summary === undefined ? true : summary
    const _dividers = dividers === undefined ? true : dividers

    const _panels = panels || [
        {
            label: <h3 className="text-md font-medium leading-6 text-gray-600">Profile</h3>,
            title: <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>,
            description:
                <p className="mt-1 text-sm text-gray-600">
                    This information will be displayed publicly so be careful what you share.
                </p>,
            content:
                <Form onSubmit={(data) => { console.log(data) }}>
                    <div className="px-4 sm:p-6">
                        <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-3 sm:col-span-2">
                                <Input name="website" label="Website" prefix="http://" placeHolder="www.example.com" />
                            </div>
                        </div>

                        <TextArea name="about" label="About" placeHolder="All about you" description="Brief description for your profile. URLs are hyperlinked." />

                        <div className="mt-4">
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
                </Form>
        },
        {
            label: <h3 className="text-md font-medium leading-6 text-gray-600">Personal Information</h3>,
            title: <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>,
            description:
                <p className="mt-1 text-sm text-gray-600">
                    Use a permanent address where you can receive mail.
                </p>,
            content:
                <Form onSubmit={(data) => { console.log(data) }} options={{
                    defaultValues: {
                        firstName: "Mike", lastName: "Smith", email: "mike@domain.com", country: "United States",
                        street: "123 N Place", city: "Rock Spring", state: "WY", postal: "82901"
                    }
                }}>
                    <div className="grid grid-cols-6 gap-6 px-4 sm:p-6">
                        <div className="col-span-6 sm:col-span-3">
                            <Input name="firstName" label="First name" />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <Input name="lastName" label="Last name" />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                            <Input name="email" type="email" label="Email address" options={{ required: "This field is required" }} description="Please be sure and enter your personal email address." placeHolder="user@domain.com" />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <Select name="country" label="Contry/Region" items={[
                                { title: "United States" },
                                { title: "Canada" },
                                { title: "Mexico" }
                            ]} />
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
                </Form>

        },
        {
            label: <h3 className="text-md font-medium leading-6 text-gray-600">Notifications</h3>,
            title: <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>,
            description:
                <p className="mt-1 text-sm text-gray-600">
                    Decide which communications you'd like to receive and how.
                </p>,
            content:
                <Form onSubmit={(data) => { console.log(data) }} options={{
                    defaultValues: {
                        comments: true, candidates: false, offers: true
                    }
                }}>
                    <div className="px-4 sm:p-6">
                        <fieldset>
                            <legend className="text-base font-medium text-gray-900">By Email</legend>
                            <div className="mt-4 space-y-4">
                                <Input name="comments" type="checkbox" label="Comments" description="Get notified when someone posts a comment." />
                                <Input name="candidates" type="checkbox" label="Candidates" description="Get notified when a candidate applies for a job." />
                                <Input name="offers" type="checkbox" label="Offers" description="Get notified when a candidate accepts or rejects an offer." />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="pt-8">
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
                </Form >
        }
    ]

    const items = _panels.map(() => !_collapsible ? false : _auto)
    if (_auto) items[0] = false

    const [collapsed, setCollapsed] = useState(items)

    return (
        <div className={"bg-gray-100 " + className}>
            {_panels.map((p, i) => (
                <React.Fragment key={i}>
                    <div>
                        <div className={"md:grid md:gap-6 " + (_summary ? "md:grid-cols-3" : "md:grid-cols-2")}>
                            {_summary &&
                                <div className="md:col-span-1">
                                    <div className="px-4 sm:px-0">
                                        {typeof p.title === 'string' ?
                                            <h3 className="text-lg font-medium leading-6 text-gray-900">{p.title}</h3> :
                                            p.title
                                        }
                                        {typeof p.description === 'string' ?
                                            <p className="mt-1 text-sm text-gray-600">{p.description}</p> :
                                            p.description
                                        }
                                    </div>
                                </div>
                            }
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="bg-white">
                                        {_collapsible &&
                                            <div className={"p-4 w-full flex border-b border-gray-100 " + (p.label ? "justify-between" : "justify-end")}>
                                                {p.label}
                                                {collapsed[i] ?
                                                    <ChevronDownIcon className="h-4 w-4 text-gray-400 cursor-pointer"
                                                        onClick={() => {
                                                            const c = !_auto ? collapsed.map(x => x) : _panels.map(() => true)
                                                            c[i] = false
                                                            setCollapsed(c)
                                                            if (onCollapse) onCollapse(c)
                                                        }}
                                                    /> :
                                                    <ChevronUpIcon className="h-4 w-4 text-gray-400 cursor-pointer"
                                                        onClick={() => {
                                                            const c = !_auto ? collapsed.map(x => x) : _panels.map(() => true)
                                                            c[i] = true
                                                            setCollapsed(c)
                                                            if (onCollapse) onCollapse(c)
                                                        }}
                                                    />
                                                }
                                            </div>
                                        }
                                        {!collapsed[i] && p.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {_dividers && (i + 1 < _panels.length) && 
                        <div className="hidden sm:block" aria-hidden="true">
                            <div className="py-6">
                                <div className="border-t border-gray-200"></div>
                            </div>
                        </div>
                    }
                    {!_dividers &&
                        <div className="py-1"></div>
                    }
                </React.Fragment>
            ))}
        </div>
    )
}