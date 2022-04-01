//Practice02

import React, { useRef, useState } from 'react';
import List from './practice2(list)'
import Create from './practice2(create)';

function App() {
  const [inputs, setInputs] = useState({
    username : "",
    age : ""
  });

  const { username, age } = inputs;
  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });


  const users = [
    {
      id : 1,
      username : "이혜인",
      age : 25
    },
    {
      id : 2,
      username : "이시훈",
      age : 33
    },
    {
      id : 3,
      username : "전민수",
      age : 28
    }
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    setInputs({
      username : "",
      age : ""
    });
    nextId.current += 1;
  };
  return(
    <div className="App">
      <Create
      username={username}
      age={age}
      onChange={onChange}
      onCreate={onCreate}
      />
      <List users={users} />
    </div>
  );
}

export default App;


// //Practice01
// import Practice01 from './practice1'

// function App() {
//   return (
//     <div className="App">
//       <Practice01 />
//     </div>
//   );
// }

// export default App;
