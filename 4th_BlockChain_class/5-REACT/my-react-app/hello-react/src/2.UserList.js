//====================== < 2021-12-22 > ======================//
//배열오브젝트 만들기, ToDo List 만들 수 있음

import React from "react"
import User from "./3.User"



function UserList({users, onRemove, onToggle}){
//   const users = [
//     {
//       id : 1,
//       username : "Undead",
//       email : "undead@undercity.com"
//     },
//     {
//       id : 2,
//       username : "Bloodelf",
//       email : "Bloodelf@silvermoon.com"
      
//     },
//     {
//       id : 3,
//       username : "Nightelf",
//       email : "Nightelf@darnasus.com"
      
//     }
//   ]
  
  return( //방법3//
    <div>
      {
        users.map((user) => (
          <User
            key={user.id}
            user={user}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))
      }
    </div>
  )

  // return(  //방법2//
  //   <div>
  //     <User user={users[0]} />
  //     <User user={users[1]} />
  //     <User user={users[2]} />
  //   </div>
  // );

  // return( //방법1//
  //   <div>
  //     <div>
  //       <b>{users[0].id}</b> <span>({users[0].email})</span>
  //     </div>
  //     <div>
  //       <b>{users[1].id}</b> <span>({users[1].email})</span>
  //     </div>
  //     <div>
  //       <b>{users[2].id}</b> <span>({users[2].email})</span>
  //     </div>
  //   </div>
  // );
}

export default React.memo(UserList);