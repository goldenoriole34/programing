import './App.css';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from './component/Box';

function App() {
  const dispatch = useDispatch()
  const number = useSelector(state =>state.number )
  const id = useSelector(state => state.id)
  const pw = useSelector(state => state.pw)

  const plus = () => {
    dispatch({type:"PLUS_NUMBER", payload : {count:5}})
  }
  const minus = () => {
    dispatch({type:"MINUS_NUMBER", payload : {count:3}})
  }
  const login = () => {
    dispatch({type:"LOGIN", payload : {id:"heidi", pw:"123"}})
  }

  return (
    <>
      <h1>{number}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <br></br>
      <h1>{id}</h1>
      <button onClick={login}>로그인</button>
      <Box />
    </>
  );
}

export default App;
