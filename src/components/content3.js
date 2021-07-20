import React from 'react'
import { SparklesIcon, BeakerIcon, GlobeIcon, CalculatorIcon, LockClosedIcon, ColorSwatchIcon } from '@heroicons/react/outline'

export default function Content3({ title, description, items, button, className }) {
  const _title = title || "Pitchfork Kickstarter Taxidermy"
  const _description = description || "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table."

  let _button =
    <button className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>

  if (button !== undefined) {
    if (button && typeof button.title === "string") {
      _button =
        <button className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
          onClick={button.onClick ? button.onClick : () => {}}>
          {button.title}
        </button>
    } else {
      _button = button
    }
  }

  const _items = items || [
    {
      title: "Shooting Stars",
      description: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
      icon: <SparklesIcon className="w-6 h-6" />
    }, {
      title: "The Catalyzer",
      description: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
      icon: <BeakerIcon className="w-6 h-6" />
    }, {
      title: "Neptune",
      description: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
      icon: <GlobeIcon className="w-6 h-6" />
    }, {
      title: "Melanchole",
      description: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
      icon: <CalculatorIcon className="w-6 h-6" />
    }, {
      title: "Bunker",
      description: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
      icon: <LockClosedIcon className="w-6 h-6" />
    }, {
      title: "Ramona Falls",
      description: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
      icon: <ColorSwatchIcon className="w-6 h-6" />
    }
  ]

  return (
    <section className={"text-gray-600 body-font " + (className ? className : "")}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          {typeof _title === "string" ?
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{_title}</h1> :
            _title
          }
          {typeof _description === "string" ?
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">{_description}</p> :
            _description
          }
        </div>
        <div className="flex flex-wrap -m-4">
          {_items.map((i, c) => (
            <div className="xl:w-1/3 md:w-1/2 p-4" key={c}>
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  {i.icon}
                </div>
                {typeof i.title === "string" ?
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{i.title}</h2> :
                  i.title
                }
                {typeof i.description === "string" ?
                  <p className="leading-relaxed text-base">{i.description}</p> :
                  i.description
                }
              </div>
            </div>
          ))
          }
        </div>
        {_button}
      </div>
    </section>
  )
}