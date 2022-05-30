import './App.css';
import {useState} from 'react'
import {useDispatch} from 'react-redux'

function App() {
  const dispatch = useDispatch()

  const plus = () => {
    dispatch({type:"PLUS_NUMBER"})
  }
  const minus = () => {
    dispatch({type:"MINUS_NUMBER"})
  }

  return (
    <>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </>
  );
}

export default App;
