import React, {useRef, useState }from "react";
import UserList from "./2.UserList"
import CreateUser from "./4.CreateUser";

function UserManage(){
  const [inputs, setInputs] = useState({
    username : "",
    email : ""
  });

  const {username, email} = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs, [name] : value
    });
  };
  
  const [users, setUsers] = useState([
    {
      id : 1,
      username : "Undead",
      email : "Undead@undercity.com",
      active : true
    },
    {
      id : 2,
      username : "Bloodelf",
      email : "Bloodelf@silvermoon.com",
      active : false
    },
    {
      id : 3,
      username : "Nightelf",
      email : "Nightelf@darnasus.com",
      active : false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));

    setInputs({
      username: "",
      email: ""
    });
    nextId.current += 1;
  };
  
  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? {...user, active: !user.active} : user
      )
    );
  }

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return(
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </>
  )
}

export default UserManage;