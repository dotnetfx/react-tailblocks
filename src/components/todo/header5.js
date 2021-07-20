import React, { useState } from 'react'
import Logo from './logo1'
import { BellIcon } from '@heroicons/react/outline'


export default function Header5({ options, className }) {
    const _options = options || {
        title: "Ready to Use Tailwind Blocks",
        logo: <Logo />,
        menu: {
            image: "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80",
            items: [
                {
                    title: "Profile",
                    onClick: () => {}
                }, {
                    title: "Settings",
                    onClick: () => {}
                }, {
                    title: "Logout",
                    onClick: () => {}
                }, 
            ]
        },
        notifications: [
            <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-blue-600 -mx-2" key={0}>
                <img className="h-8 w-8 rounded-full object-cover mx-1"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
                    alt="avatar" />
                <p className="text-sm mx-2">
                    <span className="font-bold" href="#">Sara Salah</span> replied on the <span className="font-bold text-blue-400" href="#">Upload Image</span> artical. 2m
                </p>
            </a>,
            <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-blue-600 -mx-2" key={1}>
                <img className="h-8 w-8 rounded-full object-cover mx-1"
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
                    alt="avatar" />
                <p className="text-sm mx-2">
                    <span className="font-bold" href="#">Slick Net</span> start following you. 45m
                </p>
            </a>,
            <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-blue-600 -mx-2" key={2}>
                <img className="h-8 w-8 rounded-full object-cover mx-1"
                    src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
                    alt="avatar" />
                <p className="text-sm mx-2">
                    <span className="font-bold" href="#">Jane Doe</span> Like Your reply on <span className="font-bold text-blue-400" href="#">Test with TDD</span> artical. 1h
                </p>
            </a>,
            <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-blue-600 -mx-2" key={3}>
                <img className="h-8 w-8 rounded-full object-cover mx-1"
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=398&amp;q=80"
                    alt="avatar" />
                <p className="text-sm mx-2">
                    <span className="font-bold" href="#">Abigail Bennett</span> start following you. 3h
                </p>
            </a>
        ]
    }

    const [showNotifications, setShowNotifications] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    return (
        <header className={"text-gray-600 body-font " + (className ? className : "")}>
            <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center">
                {_options.logo}
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-lg justify-center">
                    <div>{_options.title}</div>
                </nav>

                <div className="flex items-center">
                    {_options.notifications &&
                        <div className="relative">
                            <button className="flex mx-4 text-gray-600 focus:outline-none" onClick={ () => {setShowNotifications(true)} }>
                                <BellIcon className="h-5 w-5" />
                            </button>
                            { showNotifications && 
                                <div>
                                    <div className="fixed inset-0 h-full w-full z-10" onClick={ () => {setShowNotifications(false)} }></div>
                                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-20 border-2 border-gray-100">
                                        { _options.notifications }
                                    </div>
                                </div>
                            }
                        </div>
                    }

                    { _options.menu &&
                        <div className="relative">
                            <button className="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none" onClick={ () => {setShowMenu(true)} }>
                                <img className="h-full w-full object-cover"
                                    src={_options.menu.image}
                                    alt="Your avatar" />
                            </button>
                            { showMenu &&
                                <div>
                                    <div className="fixed inset-0 h-full w-full z-10" onClick={ () => {setShowMenu(false)} }></div>
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-20 border-2 border-gray-100">
                                        { _options.menu.items.map ((m, i) => (
                                            <div key={i} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white cursor-pointer" onClick={m.onClick}>
                                                {m.title}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        </header>
    )
}