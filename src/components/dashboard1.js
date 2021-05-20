import React, { useState } from 'react'
import Table from './table1'
import Card from './card1'
import { Group, Car, Bag } from './icons'

export default function Dashboard1({ options }) {
    const _options = options || {
        menu: [{
            category: "Manage",
            items: [{
                    title: "Dashboard",
                    icon:
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                        </svg>,
                    onClick: (item) => {},
                    content: 
                        <div>
                            <div className="mt-8"></div>
                            <div className="flex flex-wrap -mx-6">
                                <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                                    <Card options={{
                                        title: "New Users",
                                        value: "8,282",
                                        icon: 
                                            <div className="p-3 rounded-full bg-green-600 bg-opacity-75">
                                                <Group />
                                            </div>
                                    }}/>
                                </div>

                                <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                                    <Card options={{
                                        title: "Total Orders",
                                        value: "200,532",
                                        icon: 
                                            <div className="p-3 rounded-full bg-yellow-600 bg-opacity-75">
                                                <Cart />
                                            </div>
                                    }} />
                                </div>

                                <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                                    <Card options={{
                                        title: "Available Products",
                                        value: "215,548",
                                        icon: 
                                            <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                                                <Bag />
                                            </div>
                                    }} />
                                </div>
                            </div>
                        </div>
                }, {
                    title: "Users",
                    icon:
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M17.997 18h-.998c0-1.552.06-1.775-.88-1.993-1.438-.332-2.797-.645-3.293-1.729-.18-.396-.301-1.048.155-1.907 1.021-1.929 1.277-3.583.702-4.538-.672-1.115-2.707-1.12-3.385.017-.576.968-.316 2.613.713 4.512.465.856.348 1.51.168 1.908-.49 1.089-1.836 1.4-3.262 1.728-.982.227-.92.435-.92 2.002h-.995l-.002-.623c0-1.259.1-1.985 1.588-2.329 1.682-.389 3.344-.736 2.545-2.209-2.366-4.365-.676-6.839 1.865-6.839 2.492 0 4.227 2.383 1.867 6.839-.775 1.464.824 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.81-2.214c-1.289-.298-2.489-.559-1.908-1.657 1.77-3.342.47-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.325 0 1.269.574 2.175.904 2.925h1.048c-.17-.75-1.466-2.562-.766-3.736.412-.692 1.704-.693 2.114-.012.38.631.181 1.812-.534 3.161-.388.733-.28 1.301-.121 1.648.305.666.977.987 1.737 1.208 1.507.441 1.368.042 1.368 1.48h.997l.002-.463c0-.945-.074-1.492-1.193-1.75zm-22.805 2.214h.997c0-1.438-.139-1.039 1.368-1.48.761-.221 1.433-.542 1.737-1.208.159-.348.267-.915-.121-1.648-.715-1.349-.914-2.53-.534-3.161.41-.682 1.702-.681 2.114.012.7 1.175-.596 2.986-.766 3.736h1.048c.33-.75.904-1.656.904-2.925.001-1.509-.982-2.326-2.247-2.326-1.87 0-3.17 1.787-1.4 5.129.581 1.099-.619 1.359-1.908 1.657-1.12.258-1.194.805-1.194 1.751l.002.463z" />
                        </svg>,
                    onClick: (item) => {},
                    content: 
                        <div>
                            <div className="mt-8"></div>
                            <Table />
                        </div>
                }, {
                    title: "Applications",
                    icon:
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-16 9h-4v4h4v-4zm6 0h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4z" />
                        </svg>,
                    onClick: (item) => {},
                    content: <div></div>
                }
            ]
        }, {
            category: "Configure",
            items: [{
                    title: "Elements",
                    icon:
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                        </svg>,
                    onClick: (item) => {},
                    content: <div></div>
                }, {
                    title: "Tables",
                    icon:
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                        </svg>,
                    onClick: (item) => {},
                    content: <div></div>
                }, {
                    title: "Forms",
                    icon:
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>,
                    onClick: (item) => {},
                    content: <div></div>
                }
            ]
        }]
    }

    const [selected, setSelected] = useState(_options.menu[0].items[0]);

    return (
        <div className="flex h-screen bg-gray-200">
            <div className="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
                <nav className="mt-10 text-gray-500">
                    { _options.menu.map((m, i) => {
                        return (
                            <div key={i} className="px-4 pb-8">
                                <h2 className="text-lg">{m.category}</h2>
                                { m.items.map((t, j) => {
                                    const hover = selected.title === t.title ? "bg-gray-500 bg-opacity-25 text-gray-300" : "hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                                    return (
                                        <div key={j} className={"flex items-center mt-4 py-2 px-4 cursor-pointer " + hover} onClick={(e) => {
                                                setSelected(t)
                                                if (t.onClick) t.onClick(t)
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