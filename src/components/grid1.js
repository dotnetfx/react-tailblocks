import React from 'react'

export default function Grid1({ items, className }) {
    const _items = items || [
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key="1">
            <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">GAMES</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Monopoly</h2>
                <p className="mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet hendrerit nisi quis viverra. Cras quis ipsum arcu. Phasellus in nibh mauris. Cras malesuada facilisis porttitor.</p>
                <p className="mt-2">$24.00</p>
            </div>
        </div>,
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key="2">
            <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">GAMES</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Monopoly</h2>
                <p className="mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet hendrerit nisi quis viverra. Cras quis ipsum arcu. Phasellus in nibh mauris. Cras malesuada facilisis porttitor.</p>
                <p className="mt-2">$24.00</p>
            </div>
        </div>,
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key="3">
            <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">GAMES</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Monopoly</h2>
                <p className="mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet hendrerit nisi quis viverra. Cras quis ipsum arcu. Phasellus in nibh mauris. Cras malesuada facilisis porttitor.</p>
                <p className="mt-2">$24.00</p>
            </div>
        </div>,
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key="4">
            <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">GAMES</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Monopoly</h2>
                <p className="mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet hendrerit nisi quis viverra. Cras quis ipsum arcu. Phasellus in nibh mauris. Cras malesuada facilisis porttitor.</p>
                <p className="mt-2">$24.00</p>
            </div>
        </div>,
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key="5">
            <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">GAMES</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Monopoly</h2>
                <p className="mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet hendrerit nisi quis viverra. Cras quis ipsum arcu. Phasellus in nibh mauris. Cras malesuada facilisis porttitor.</p>
                <p className="mt-2">$24.00</p>
            </div>
        </div>,
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key="6">
            <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">GAMES</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Monopoly</h2>
                <p className="mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet hendrerit nisi quis viverra. Cras quis ipsum arcu. Phasellus in nibh mauris. Cras malesuada facilisis porttitor.</p>
                <p className="mt-2">$24.00</p>
            </div>
        </div>,
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key="7">
            <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">GAMES</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Monopoly</h2>
                <p className="mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet hendrerit nisi quis viverra. Cras quis ipsum arcu. Phasellus in nibh mauris. Cras malesuada facilisis porttitor.</p>
                <p className="mt-2">$24.00</p>
            </div>
        </div>,
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key="8">
            <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">GAMES</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Monopoly</h2>
                <p className="mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet hendrerit nisi quis viverra. Cras quis ipsum arcu. Phasellus in nibh mauris. Cras malesuada facilisis porttitor.</p>
                <p className="mt-2">$24.00</p>
            </div>
        </div>
    ]

    return (
        <section className={"text-gray-600 body-font " + (className ? className : "")}>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {_items.map((i) => i)}
                </div>
            </div>
        </section>
    )
}