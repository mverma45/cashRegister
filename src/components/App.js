import "./App.css"
import { useState } from "react"

function App() {
  const [items, setItems] = useState([])

  const addItem = item => {
    console.log("hello there", item)
    setItems([...items, item])
  }

  return (
    <div className="App">
      <header className="heading">
        <h1>Welcome to the Store</h1>
      </header>

      <Form onSubmit={addItem} />
      <Items items={items} />
      <Total items={items} />
    </div>
  )
}

function Form({ onSubmit }) {
  let [price, setPrice] = useState(0)
  let [name, setName] = useState("")

  const handlePriceChange = pr => {
    console.log("the price", pr)
    setPrice(parseFloat(pr))
  }

  const handleNameChange = n => {
    console.log("the name", n)
    setName(n)
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ price, name })
    setPrice(0)
    setName("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item">Enter Item:</label>
      <input
        type="text"
        id="item"
        name="item"
        value={name}
        onChange={e => handleNameChange(e.target.value)}
      />
      <br />
      <label htmlFor="price">Enter Price: $</label>
      <input
        value={price}
        type="number"
        name="price"
        onChange={e => handlePriceChange(e.target.value)}
      />
      <br />
      <label htmlFor="stotal">Subtotal: $</label>
      <br />
      <br />
      <label htmlFor="tax">Tax: ${tax(price)}</label>
      <br />
      <br />
      <label htmlFor="total">Total: ${tax(price) + price}</label>
      <br />
      <br />
      <input type="submit" value="add Item" />
    </form>
  )
}

// TODO: calculate total of all items
function Items({ items }) {
  return items.map((item, d) => {
    return (
      <div key={d}>
        {item.name} {item.price}
      </div>
    )
  })
}

// work on getting a total.
function Total({ items }) {
  // I think this is item because on like 96 it returns an item name, then it will return the Total price so {Total.price}
  return items.map((item, t) => {
    return (
      <div key={t}>
        {item.name} {Total.price}
      </div>
    )
    // < div > Total: </div >
  })
}
// return items.map((item, d) => {
//   return (
//     <div key={d}>
//       {item.name} {item.price}
//     </div>
//   )
// })

//Subtotal gets the price and enters in subtotal

// calculates tax
// takes string 42, then passes it to test2 as an integer then multiplies it by 2 then prints to the console 84 ex. 42 * 2, the 10 in the test2 arguments is the base.

// let text = '42.25'
// let test2 = parseFloat(text, 10)*2;
// console.log(test2)

function tax(cost) {
  return parseFloat(cost) * 0.0725
}

export default App
