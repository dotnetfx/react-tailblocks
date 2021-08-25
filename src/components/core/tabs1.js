import React, { useState } from 'react'

export default function Tabs1({ tabs, className }) {
    const [selected, setSelected] = useState(0)

    const _tabs = tabs || [{
        title: "Description",
        content:
            <p>
                Description locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean.
            </p>
    }, {
        title: "Reviews",
        content:
            <p>
                Reviews locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean.
            </p>
    }, {
        title: "Details",
        content:
            <p>
                Details locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean.
            </p>
    }]

    return (
        <div className={className}>
            <div className="flex mb-4">
                {_tabs.map((t, i) => {
                    const cls = selected == i ? "text-blue-500 border-blue-500" : "text-gray-900 border-gray-300"
                    return (
                        <a key={i} className={"flex-grow border-b-2 py-2 text-lg px-1 cursor-pointer " + cls} onClick={() => setSelected(i)}>{t.title}</a>
                    )
                })}
            </div>
            <div>{_tabs[selected].content}</div>
        </div>
    )
}