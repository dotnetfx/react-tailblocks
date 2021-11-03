import React from 'react'
import { Ecommerce2 } from 'react-tailblocks'

const App = () => {

  return (
    <Ecommerce2
      brand="ZOKKS"
      title="Red Motif"
      buttonText="Buy it Now"
      description={
        <div>
          <span>
            These high-quality socks with sublimated print provide optimum comfort with style wherever one might go – a subtle accent to complement
            an office look or an eye-catching statement for an extravagant outfit.
          </span>
          <br /><br />
          <span>– 95% Polyester, 5% Spandex</span><br />
          <span>– 3 different sizes</span><br />
          <span>– Ribbed tube</span><br />
          <span>– Cushioned bottoms</span>
          <br /><br />
          <table>
            <thead>
              <tr>
                <th className="py-4 pr-8"></th>
                <th className="py-4 pr-8">Small</th>
                <th className="py-4 pr-8">Medium</th>
                <th className="py-4 pr-8">Large</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pr-8">Total Length, in</td>
                <td>12.99</td>
                <td>15.35</td>
                <td>16.14</td>
              </tr>
              <tr>
                <td>Width, in</td>
                <td>3.94</td>
                <td>3.94</td>
                <td>3.94</td>
              </tr>
              <tr>
                <td>Women’s US sizes</td>
                <td>6 – 8</td>
                <td>8.5 – 11</td>
                <td>11.5 – 13</td>
              </tr>
              <tr>
                <td>Mens US sizes</td>
                <td>5 – 6.5</td>
                <td>7 – 9.5</td>
                <td>10 – 13</td>
              </tr>
            </tbody>
          </table>
          <br /><br />
        </div>
      }
      color="red"
      variant={{
        title: "Color",
        options: [
          { title: "Red", price: 9.91 }, 
          { title: "Green", price: 9.92, disabled: true }, 
          { title: "Yellow", price: 9.93 }
        ]
      }}
      images={[
        {
          original: 'https://i2.wp.com/zokks.com/wp-content/uploads/2021/10/45132-168.jpg?fit=1024%2C1024&ssl=1',
          thumbnail: 'https://i2.wp.com/zokks.com/wp-content/uploads/2021/10/45132-168.jpg?fit=120%2C120&ssl=1'
        },
        {
          original: 'https://i1.wp.com/zokks.com/wp-content/uploads/2021/10/45132-169.jpg?fit=1024%2C1024&ssl=1',
          thumbnail: 'https://i1.wp.com/zokks.com/wp-content/uploads/2021/10/45132-169.jpg?fit=120%2C120&ssl=1'
        },
        {
          original: 'https://i2.wp.com/zokks.com/wp-content/uploads/2021/10/45132-170.jpg?fit=1024%2C1024&ssl=1',
          thumbnail: 'https://i2.wp.com/zokks.com/wp-content/uploads/2021/10/45132-170.jpg?fit=120%2C120&ssl=1'
        }
      ]}
      onPurchase={(item) => {
        console.log("Ordered variant option: ", item)
      }}
    />
  )
}

export default App
