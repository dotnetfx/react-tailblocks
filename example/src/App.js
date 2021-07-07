import React, { useState } from 'react'
import { Blog1, Dashboard1, Header2, Footer1, Login1, Pricing1, Register1, Reset1, Modal1 } from 'react-tailblocks'
import { ChartPieIcon, UserGroupIcon, CollectionIcon, ShoppingBagIcon, CubeIcon, TableIcon, TemplateIcon } from '@heroicons/react/outline'

const App = () => {
  const [selected, setSelected] = useState();

  const menu = [{
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

  const menu1 = [{
      category: "EntrePay",
      items: [{
          title: "Dashboard",
          icon: <ChartPieIcon className="h-6 w-6" />,
          content:
              <p>Hello worlds</p>
      }]
  }, {
      items: [{
          content: 
              <div>
                  <h3 className="text-gray-700 text-3xl font-medium">Profile</h3>
              </div>
      }]
  }]

  return (
    <React.Fragment>
      <Header2 fixed />
      <Blog1 />
      <Modal1 />
      <Pricing1 />
      <Register1 onRegister={(value) => console.log(value)} passwordLength={8} loginUrl="#" />
      <Login1 onLogin={(value) => console.log(value)} passwordLength={8} forgotUrl="#" registerUrl="/auth/register" />
      <Reset1
        loginUrl="#"
        onReset={(value) => { }}
      />

      <Footer1 />

      <button type="button" onClick={() => {
        setSelected(menu[1].items[0])
      }}>
        Test Button
      </button>

      <Dashboard1
        selectedItem={selected}
        menu={menu1}
      />
    </React.Fragment>
  )
}

export default App
