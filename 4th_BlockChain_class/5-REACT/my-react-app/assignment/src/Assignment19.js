import React, {useState} from 'react';
import './Assignment19.css'

export default function Assignment19 () {
  const [inputs, setInputs] = useState("0");

  const addToInput = (e) => {
    if(inputs === 0) {
      setInputs(e.target.value)
    }
    else {setInputs(inputs + e.target.value);
    }
  }

  const evalInputs = () => {
    setInputs(() => {
        return (
            eval(inputs)
        )
    })
  }

  const resetHandler = () => {
    setInputs(0)
  }

  return (
  <div className="assignment19">
    <p> This is Assignment19</p>
    <h1> React Calculator</h1>
    <br></br>
    <div className="calculator">
      <input
        name="result"
        value={inputs || "0"}   
      ></input>
      <br />
      <button onClick={addToInput} value={9}>9</button>
      <button onClick={addToInput} value={8}>8</button>
      <button onClick={addToInput} value={7}>7</button>
      <button onClick={addToInput} value={'*'}>*</button>
      <br />
      <button onClick={addToInput} value={6}>6</button>
      <button onClick={addToInput} value={5}>5</button>
      <button onClick={addToInput} value={4}>4</button>
      <button onClick={addToInput} value={'+'}>+</button>
      <br />
      <button onClick={addToInput} value={3}>3</button>
      <button onClick={addToInput} value={2}>2</button>
      <button onClick={addToInput} value={1}>1</button>
      <button onClick={addToInput} value={'-'}>-</button>
      <br />
      <button onClick={addToInput} value={0}>0</button>
      <button onClick={addToInput} value={'.'}>.</button>
      <button onClick={evalInputs} >=</button>
      <button onClick={addToInput} value={'/'}>/</button>
      <br />
      <button className="clear" onClick={resetHandler}>Reset</button>
    </div>  {/* <div className="calculator"> */}
  </div> //  <div className="assignment19">
  );
}