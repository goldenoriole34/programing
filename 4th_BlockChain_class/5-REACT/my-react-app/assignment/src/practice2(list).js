import React from "react"

function User({user}){
  return(
    <div>
      <div>{user.username}({user.age})</div>
    </div>
  )
}

function List ({users}){
  return(
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  )
}

export default List;