import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList,setUserList]=useState([]);
  const addUserHandler=(userName,userAge)=>{
    setUserList((prevUserList)=>{
      return [...prevUserList,{name:userName,age:userAge,id:Math.random().toString()}]
    })
  }
  return (
    <div>
      <AddUsers onAddUser={addUserHandler}/>
      <UsersList users={userList} />
    </div>
  );
}

export default App;
