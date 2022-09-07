import './App.css';
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
    </>
  );
}

export default App;
