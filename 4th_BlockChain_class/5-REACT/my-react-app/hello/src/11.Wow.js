//multiple inputs Hooking
import React, {useState} from "react";

function Wow() {
  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
    console.log(inputs)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }


  return(
  <form onSubmit={handleSubmit}>
    <label>Enter Your Name:
      <input
        type="text"
        name="username"
        value={inputs.username || ""}
        onChange={handleChange}
      />
    </label>
    <label>
      <input
        type="number"
        name="age"
        value={inputs.age || ""}
        onChange={handleChange}
      />
    </label>
    <input type="submit" />
  </form>
  );
}

export default Wow;