import React from 'react';
import User from './User';
import people from "../data";
import { useState } from 'react';
const UserList = () => {
    const [user ,setuser] = useState(people);
    function getid(id)
    {
         const fileterpeople = user.filter( (u) => u.id !== id);
         setuser(fileterpeople);
    }
    function handclick()
    {
      setuser([])
    }
  return (
    <>
      {
        user.map( p => <User {...p} getid={getid} key={p.id}/>)
      }
      <button onClick={handclick}>Clear</button>
    </>
  )
}

export default UserList