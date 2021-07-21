import React, { useEffect, useState } from 'react'
import Table from './table1'
import Card from './card1'
import Header from './header2'
import { ChartPieIcon, UserGroupIcon, CollectionIcon, ShoppingBagIcon, CubeIcon, TableIcon, TemplateIcon } from '@heroicons/react/outline'

export default function Dashboard1({ navigation, menu, contentClass, selectedItem }) {
    const [show, setShow] = useState(true)
    const _contentClass = contentClass || "bg-gray-100 px-6 py-8"
    const _navigation = navigation || <Header />
    const _menu = menu || [{
        category: "Manage",
        items: [{
            title: "Dashboard",
            icon: <ChartPieIcon className="h-6 w-6" />,
            content:
                <div>
                    <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>
                    <div className="mt-8"></div>
                    <div className="flex flex-wrap -mx-6">
                        <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                            <Card title="New Users" value="8,282"
                                icon={
                                    <div className="p-3 rounded-full bg-green-600 bg-opacity-75 text-white">
                                        <UserGroupIcon className="h-8 w-8" />
                                    </div>
                                }
                            />
                        </div>

                        <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                            <Card title="Total Orders" value="200,532"
                                icon={
                                    <div className="p-3 rounded-full bg-yellow-600 bg-opacity-75 text-white">
                                        <CollectionIcon className="h-8 w-8" />
                                    </div>
                                }
                            />
                        </div>

                        <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                            <Card title="Available Products" value="215,548"
                                icon={
                                    <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75 text-white">
                                        <ShoppingBagIcon className="h-8 w-8" />
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
        }, {
            title: "Users",
            icon: <UserGroupIcon className="h-6 w-6" />,
            content:
                <div>
                    <h3 className="text-gray-700 text-3xl font-medium">Users</h3>
                    <div className="mt-8"></div>
                    <Table />
                </div>
        }, {
            title: "Applications",
            icon: <CollectionIcon className="h-6 w-6" />,
            content:
                <div>
                    <h3 className="text-gray-700 text-3xl font-medium">Applications</h3>
                </div>
        }]
    }, {
        category: "Configure",
        items: [{
            title: "Elements",
            icon: <CubeIcon className="h-6 w-6" />,
            content:
                <div>
                    <h3 className="text-gray-700 text-3xl font-medium">Elements</h3>
                </div>
        }, {
            title: "Tables",
            icon: <TableIcon className="h-6 w-6" />,
            content:
                <div>
                    <h3 className="text-gray-700 text-3xl font-medium">Tables</h3>
                </div>
        }, {
            title: "Forms",
            icon: <TemplateIcon className="h-6 w-6" />,
            content:
                <div>
                    <h3 className="text-gray-700 text-3xl font-medium">Forms</h3>
                </div>
        }]
    }, {
        items: [{
            content:
                <div>
                    <h3 className="text-gray-700 text-3xl font-medium">Profile</h3>
                </div>
        }]
    }]

    const [selected, setSelected] = useState(_menu[0].items[0]);
    useEffect(() => {
        if (selectedItem) setSelected(selectedItem)
        setShow(window === undefined ? true : window.innerWidth >= 768)
    }, [selectedItem])

    return (
        <div className="flex flex-col h-screen">
            {_navigation}
            <div className="flex h-full bg-gray-200">
                <div className="z-50 inset-y-0 left-0 transition h-full duration-300 transform bg-gray-900 overflow-hidden lg:translate-x-0 lg:static lg:inset-0">
                    <nav className={"md:mt-8 text-gray-500 h-full flex " + (show ? "mt-4 md:mt-8" : "")}>
                        <div className="w-full overflow-x-hidden overflow-y-auto">
                            {_menu.map((m, i) => {
                                return (m.category &&
                                    <div key={i} className="pl-2 md:pl-4 pb-8">
                                        {show ? <h2 className="text-lg pb-2">{m.category}</h2> : <div className="mt-2"></div>}
                                        {m.items.map((t, j) => {
                                            const hover = selected.title === t.title ? "bg-gray-500 bg-opacity-25 text-gray-300" : "hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                                            return (
                                                <div key={j} className={"flex items-center py-1 md:py-2 px-1 md:px-4 cursor-pointer " + hover} onClick={(e) => {
                                                    setSelected(t)
                                                }}>
                                                    {t.icon}
                                                    {show && <span className="mx-3">{t.title}</span>}
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="m-auto overflow-hidden">
                            <div className="text-3xl md:text-4xl pr-1 cursor-pointer"
                                onClick={() => {
                                    setShow(!show)
                                }}
                            >|</div>
                        </div>
                    </nav>
                </div>

                <div className="flex-1 flex flex-column overflow-hidden">
                    <main className={"flex-1 overflow-x-hidden overflow-y-auto " + _contentClass}>
                        {selected.content}
                    </main>
                </div>
            </div>
        </div>
    )
}