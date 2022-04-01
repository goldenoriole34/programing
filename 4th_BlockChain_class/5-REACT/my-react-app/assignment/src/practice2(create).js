import React from "react";

function Create({username, age, onChange, onCreate}){
  return(
    <div>
      <input
        name="username"
        placeholder="이름"
        onChange={onChange}
        value={username}
      />
      <input
        name="age"
        placeholder="나이"
        onChange={onChange}
        value={age}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  )
}

export default Create;