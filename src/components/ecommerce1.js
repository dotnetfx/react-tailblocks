import React from 'react'

export default function Ecommerce1({ items, className }) {
    const _items = items || [
        {
            image:
                <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>,
            category: <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>,
            title: <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>,
            description: <p className="mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dui magna. Nam vehicula risus at pulvinar blandit. Donec eros urna, cursus id rutrum in, accumsan aliquam est.</p>,
            price: <p className="mt-2">$16.00</p>
        }, {
            image:
                <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>,
            category: <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>,
            title: <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>,
            description: <p className="mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dui magna. Nam vehicula risus at pulvinar blandit. Donec eros urna, cursus id rutrum in, accumsan aliquam est.</p>,
            price: <p className="mt-2">$16.00</p>
        }, {
            image:
                <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>,
            category: <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>,
            title: <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>,
            description: <p className="mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dui magna. Nam vehicula risus at pulvinar blandit. Donec eros urna, cursus id rutrum in, accumsan aliquam est.</p>,
            price: <p className="mt-2">$16.00</p>
        }, {
            image:
                <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>,
            category: <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>,
            title: <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>,
            description: <p className="mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dui magna. Nam vehicula risus at pulvinar blandit. Donec eros urna, cursus id rutrum in, accumsan aliquam est.</p>,
            price: <p className="mt-2">$16.00</p>
        }, {
            image:
                <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>,
            category: <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>,
            title: <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>,
            description: <p className="mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dui magna. Nam vehicula risus at pulvinar blandit. Donec eros urna, cursus id rutrum in, accumsan aliquam est.</p>,
            price: <p className="mt-2">$16.00</p>
        }, {
            image:
                <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>,
            category: <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>,
            title: <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>,
            description: <p className="mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dui magna. Nam vehicula risus at pulvinar blandit. Donec eros urna, cursus id rutrum in, accumsan aliquam est.</p>,
            price: <p className="mt-2">$16.00</p>
        }, {
            image:
                <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>,
            category: <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>,
            title: <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>,
            description: <p className="mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dui magna. Nam vehicula risus at pulvinar blandit. Donec eros urna, cursus id rutrum in, accumsan aliquam est.</p>,
            price: <p className="mt-2">$16.00</p>
        }, {
            image:
                <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>,
            category: <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>,
            title: <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>,
            description: <p className="mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dui magna. Nam vehicula risus at pulvinar blandit. Donec eros urna, cursus id rutrum in, accumsan aliquam est.</p>,
            price: <p className="mt-2">$16.00</p>
        }
    ]

    return (
        <section className={"text-gray-600 body-font " + (className ? className : "")}>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {_items.map((i, c) => (
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={c}>
                            {typeof i.image === "string" ?
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={i.image} />
                                </a> : i.image}
                            <div className="mt-4">
                                {typeof i.category === "string" ?
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{i.category}</h3> : i.category}
                                {typeof i.title === "string" ?
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{i.title}</h2> : i.title}
                                {typeof i.description === "string" ?
                                    <p className="mt-1 text-sm">{i.description}</p> : i.description}
                                {typeof i.price === "string" || typeof i.price === "number" ?
                                    <p className="mt-2">${i.price}</p> : i.price}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}