import React from 'react'
import { Form, Input } from 'react-tailblocks'

const App = () => {

  return (
    <div className="p-8">
      <Form
        options={{ defaultValues: { title: "Hello world" } }}
        onSubmit={
          data => {
            console.log(data)
          }
        }
      >
        <Input name="title" label="Title" description="Try inputing something and see if it breaks" />
      </Form>
    </div>

  )
}

export default App
