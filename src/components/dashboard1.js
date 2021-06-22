import React, { useState } from 'react'
import Table from './table1'
import Card from './card1'
import { ChartPieIcon, UserGroupIcon, CollectionIcon, ShoppingBagIcon, CubeIcon, TableIcon, TemplateIcon } from '@heroicons/react/outline'

export default function Dashboard1({ menu }) {
    const _menu = menu || [{
        category: "Manage",
        items: [{
            title: "Dashboard",
            icon: <ChartPieIcon className="h-6 w-6" />,
            content:
                <div>
                    <div className="mt-8"></div>
                    <div className="flex flex-wrap -mx-6">
                        <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                            <Card title="New Users" value="8,282"
                                icon={
                                    <div className="p-3 rounded-full bg-green-600 bg-opacity-75">
                                        <UserGroupIcon className="h-8 w-8" />
                                    </div>
                                }
                            />
                        </div>

                        <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                            <Card title="Total Orders" value="200,532"
                                icon={
                                    <div className="p-3 rounded-full bg-yellow-600 bg-opacity-75">
                                        <CollectionIcon className="h-8 w-8" />
                                    </div>
                                }
                            />
                        </div>

                        <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                            <Card title="Available Products" value="215,548"
                                icon={
                                    <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
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
                    <div className="mt-8"></div>
                    <Table />
                </div>
        }, {
            title: "Applications",
            icon: <CollectionIcon className="h-6 w-6" />,
            content: <div></div>
        }
        ]
    }, {
        category: "Configure",
        items: [{
            title: "Elements",
            icon: <CubeIcon className="h-6 w-6" />,
            content: <div></div>
        }, {
            title: "Tables",
            icon: <TableIcon className="h-6 w-6" />,
            content: <div></div>
        }, {
            title: "Forms",
            icon: <TemplateIcon className="h-6 w-6" />,
            content: <div></div>
        }
        ]
    }]

    const [selected, setSelected] = useState(_menu[0].items[0]);

    return (
        <div className="flex h-screen bg-gray-200">
            <div className="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
                <nav className="mt-10 text-gray-500">
                    {_menu.map((m, i) => {
                        return (
                            <div key={i} className="px-4 pb-8">
                                <h2 className="text-lg">{m.category}</h2>
                                {m.items.map((t, j) => {
                                    const hover = selected.title === t.title ? "bg-gray-500 bg-opacity-25 text-gray-300" : "hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                                    return (
                                        <div key={j} className={"flex items-center mt-4 py-2 px-4 cursor-pointer " + hover} onClick={(e) => {
                                            setSelected(t)
                                        }}>
                                            {t.icon}
                                            <span className="mx-3">{t.title}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </nav>
            </div>

            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="mx-auto px-6 py-8">
                        <h3 className="text-gray-700 text-3xl font-medium">{selected.title}</h3>
                        {selected.content}
                    </div>
                </main>
            </div>
        </div>
    )
}