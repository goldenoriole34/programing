import './App.css';
import { Box } from './component/Box';
import { useState } from 'react';

function App() 
{
  const [counter, setCounter]= useState(0)

  const increase = () => {
    setCounter(counter + 1)
  }

  const decrease = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <div>{counter}</div>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </>
  )
}

export default App;
