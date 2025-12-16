import React, { useEffect } from 'react'

export default function Adminusers() {











   

    useEffect(() => {
      getAllUsersdata();  
    }, []

    );






  return (
    <div>
        {users.map((curUser, index) => {
            return <h2 key = {index}>{curUser.username} </h2>
        })}




    </div>
  )
}
