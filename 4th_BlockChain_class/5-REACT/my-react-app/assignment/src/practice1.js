import React, {useState, useRef} from 'react'

function Practice01(){
  const [inputs, setInputs] = useState({
    name : '',
    nickname : ''
  });

  const {name, nickname} = inputs;

  const changeHandler = (e) => {
    const {value, name} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  }

  const nameInput = useRef();

  const resetHandler = () =>{
    setInputs({
      name : '',
      nickname : ''
    });
    nameInput.current.focus();  
  }

return(
  <div>
    <input
      name='name'
      placeholder='name'
      value={name}
      onChange={changeHandler}
      ref={nameInput}
    />
    <input
      name='nickname'
      placeholder='nickname'
      value={nickname}
      onChange={changeHandler}
    />
    <button onClick={resetHandler}>RESET</button>
    <div>Value : {name} {nickname}</div>
  </div>
)

}

export default Practice01;