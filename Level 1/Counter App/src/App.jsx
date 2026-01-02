import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const increment = () => {
    // Increment logic here
   //  Functional update: Always uses the latest state value
    setCount(prev => prev + 1); 
  }

  const decrement  = () => {
    // Decrement logic here
    if (count === 0) return; // Prevent going below 0
    setCount(prev => prev - 1);
  }

  const reset = () => {
    // Reset logic here
    setCount(0);
  }

  return (
  <div>
    <h1>Counter App</h1>
    <div>
      <button onClick={decrement} disabled={count === 0}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
    <button onClick={reset}>Reset</button>
  </div>
  )
}

export default App
