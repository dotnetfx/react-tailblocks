import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery'

export default function Ecommerce2({ brand, title, description, price, select, images, variants, reviews, className, onAddToCart }) {
    const _brand = brand || <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
    const _title = title || <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
    const _description = description ||
        <p className="leading-relaxed">
            Fam locavore kickstarter distillery.Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY.XOXO fam indxgo juiceramps cornhole
            raw denim forage brooklyn.Everyday carry +1 seitan poutine tumeric.Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar
            banjo tattooed umami cardigan.
        </p>
    const _select = select || {
        title: "Size",
        options: ["SM", "M", "L", "XL"]
    }
    const _variants = variants || {
        title: "Color",
        description: "",
        options: {
            images: [<img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />]
        }
    }

    const _reviews = reviews || [
        { title: "Awesome Socks", description: "I just cant beleive the quality of these socks.", date: "2021-10-01", reviewer: "Tom Brady", rating: 5 },
        { title: "What a product", description: "Love these socks, just wish they had toes.", date: "2021-09-08", reviewer: "Kevin Bacon", rating: 4 },
        { title: "Really Good But ...", description: "Really comfortable sock, but need to be more breathable.", date: "2021-10-01", reviewer: "Jennifer Jones", rating: 3 },
        { title: "Love to Roll", description: "Love to roll with my new fancy socks.", date: "2021-10-01", reviewer: "Lil Wayne", rating: 4 }
    ]

    const _price = price || 58.00

    const _stars = []
    const rating = _reviews.reduce((avg, r, _, { length }) => {
        const value = r.rating <= 5 ? r.rating : 5
        return avg + value / length
    }, 0)

    for (let i = 0; i < 5; i++) {
        if (i <= Math.round(rating) - 1) {
            _stars.push(
                <svg key={i} fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
            )
        } else {
            _stars.push(
                <svg key={i} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
            )
        }
    }

    const _images = images || [
        {
            original: 'https://picsum.photos/id/1018/400/800/',
            thumbnail: 'https://picsum.photos/id/1018/100/100/'
        },
        {
            original: 'https://picsum.photos/id/1015/400/800/',
            thumbnail: 'https://picsum.photos/id/1015/100/100/'
        },
        {
            original: 'https://picsum.photos/id/1019/400/800/',
            thumbnail: 'https://picsum.photos/id/1019/100/100/'
        }
    ]

    const [option, setOption] = useState(Array.isArray(_select.options) ? _select.options[0] : null)

    return (
        <section className={"text-gray-600 body-font overflow-hidden " + (className ? className : "")}>
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    {/*<img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />*/}
                    <div className="lg:w-1/2 w-full lg:h-auto h-64">
                    <ImageGallery thumbnailPosition="left" useBrowserFullscreen={true} showBullets={true} showNav={false} items={_images} />
                    </div>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        {typeof _brand === "string" ? <h2 className="text-sm title-font text-gray-500 tracking-widest">{_brand}</h2> : _brand}
                        {typeof _title === "string" ? <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{_title}</h1> : _title}

                        <div className="flex mb-4">
                            <span className="flex items-center">
                                {_stars}
                                <span className="text-gray-600 ml-3 font-light text-sm">{_reviews.length} Reviews</span>
                            </span>
                            {/*<span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>*/}
                        </div>

                        {typeof _description === "string" ? <p className="leading-relaxed">{_description}</p> : _description}

                        <div className="flex mt-4 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            {/*<div className="flex">
                                <span className="mr-3">Color</span>
                                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                            </div>*/}
                            <div className="flex ml-6 items-center">
                                <span className="mr-3">{_select.title}</span>
                                <div className="relative">
                                    {Array.isArray(_select.options) ?
                                        <React.Fragment>
                                            <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10" value={option} onChange={(e) => {
                                                setOption(e.target.value)
                                            }}>
                                                {_select.options.map((s, i) => typeof s === "string" ? <option key={i}>{s}</option> : s)}
                                            </select>
                                            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </React.Fragment> : _select.options
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">${_price.toFixed(2)}</span>
                            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={() => {
                                if (onAddToCart) onAddToCart(option)
                            }}>Add to Cart</button>
                            {/*<button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}