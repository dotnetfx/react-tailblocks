import React from 'react'

export default function Email1({ title, description, button, className }) {
    const _title = title || "Get the Latest News and Updates from React Tailblocks"
    const _description = description || "Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin."

    let _button =
        <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>

    if (button !== undefined) {
        if (button && typeof button.title === "string") {
            _button =
                <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                    onClick={button.onClick ? button.onClick : () => {}}>
                    {button.title}
                </button>
        } else {
            _button = button
        }
    }

    return (
        <section className={"text-gray-600 body-font " + (className ? className : "")}>
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    {typeof _title === "string" ?
                        <h1 className="title-font font-medium text-3xl text-gray-900">{_title}</h1> :
                        _title
                    }
                    {typeof _description === "string" ?
                        <p className="leading-relaxed mt-4">{_description}</p> :
                        _description
                    }
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                        <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    { _button }
                </div>
            </div>
        </section>
    )
}