import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    if (counter <= 19) {
      counter = counter + 1
      setCounter(counter)
      console.log("Increased", counter);
    }
    
  }

  const decreaseValue = () => {
    if (counter >= 1) {
      counter = counter - 1
      setCounter(counter)
      console.log("Decreased", counter);
    }
  }

  return (
    <>
      <h1>React on Youtube</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={decreaseValue}
      >Decrease Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
