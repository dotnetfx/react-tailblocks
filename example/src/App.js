import React from 'react'
//import React, { useState } from 'react'
//import { Blog1, Dashboard1, Header2, Footer1, Login1, Pricing1, Register1, Reset1, Modal1 } from 'react-tailblocks'
//import { ChartPieIcon, UserGroupIcon, CollectionIcon, ShoppingBagIcon, CubeIcon, TableIcon, TemplateIcon } from '@heroicons/react/outline'
//import { Header2, Footer1, Layout1, Dashboard1 } from 'react-tailblocks'
//import { Dashboard1 } from 'react-tailblocks'
import { Pricing1 } from 'react-tailblocks'

const App = () => {
  // const [selected, setSelected] = useState();

  // const menu = [{
  //   category: "Configure",
  //   items: [{
  //     title: "Elements",
  //     icon: <CubeIcon className="h-6 w-6" />,
  //     content:
  //       <div>
  //         <h3 className="text-gray-700 text-3xl font-medium">Elements</h3>
  //       </div>
  //   }, {
  //     title: "Tables",
  //     icon: <TableIcon className="h-6 w-6" />,
  //     content:
  //       <div>
  //         <h3 className="text-gray-700 text-3xl font-medium">Tables</h3>
  //       </div>
  //   }, {
  //     title: "Forms",
  //     icon: <TemplateIcon className="h-6 w-6" />,
  //     content:
  //       <div>
  //         <h3 className="text-gray-700 text-3xl font-medium">Forms</h3>
  //       </div>
  //   }]
  // }, {
  //   items: [{
  //     content:
  //       <div>
  //         <h3 className="text-gray-700 text-3xl font-medium">Profile</h3>
  //       </div>
  //   }]
  // }]

  // const menu1 = [{
  //     category: "EntrePay",
  //     items: [{
  //         title: "Dashboard",
  //         icon: <ChartPieIcon className="h-6 w-6" />,
  //         content:
  //             <p>Hello worlds</p>
  //     }]
  // }, {
  //     items: [{
  //         content: 
  //             <div>
  //                 <h3 className="text-gray-700 text-3xl font-medium">Profile</h3>
  //             </div>
  //     }]
  // }]

  // return (
  //   <React.Fragment>
  //     <Header2 fixed />
  //     <Blog1 />
  //     <Modal1 />
  //     <Pricing1 />
  //     <Register1 onRegister={(value) => console.log(value)} passwordLength={8} loginUrl="#" />
  //     <Login1 onLogin={(value) => console.log(value)} passwordLength={8} forgotUrl="#" registerUrl="/auth/register" />
  //     <Reset1
  //       loginUrl="#"
  //       onReset={(value) => { }}
  //     />

  //     <Footer1 />

  //     <button type="button" onClick={() => {
  //       setSelected(menu[1].items[0])
  //     }}>
  //       Test Button
  //     </button>

  //     <Dashboard1
  //       selectedItem={selected}
  //       menu={menu1}
  //     />
  //   </React.Fragment>
  // )

  return (
    /*<Dashboard1 />*/
    <Pricing1 />

     /*<div className="p-16">
     <Header2 />

      <Layout1 className="my-8 p-8" />

      <div className="container m-24 w-2/6">
        <Form
          onSubmit={(data) => { console.log(data) }}
        >
          <Input type="text" name="url" label="Address" placeHolder="www.example.com" prefix="http://" className="mb-4" options={{
              pattern: {
                value: /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi,
              message: 'Entry must be a valid URL'
          }}}/>

          <Input type="text" name="make" label="Make" placeHolder="Ford" options={{ required: "Make is required" }} className="mb-4" />

          <Select name="model" label="Model" className="mb-4">
            <option>Falcon</option>
            <option>F-150</option>
            <option>Bronco</option>
            <option>F-250</option>
          </Select>

          <TextArea name="description" label="Description" description="Brief descripton of the vehicle including any damage to the body or mechanical issues" className="mb-4" />

          <button type="reset" className="bg-gray-300 text-black rounded py-2 px-4 mt-4 mr-2">Cancel</button>
          <button type="submit" className="bg-blue-500 text-white rounded py-2 px-4 mt-4">Save</button>
        </Form>
        </div>


      <Footer1 />
    </div>*/
  )
}

export default App
