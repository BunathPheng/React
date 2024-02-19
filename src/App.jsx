// import React from 'react'
// import UserList from './components/UserList'
// const App = () => {
//   return (
//     <div className='main'>
//        <UserList />
//     </div>
//   )
// }

import { useState } from "react";
// export default App

const App = () => {
  const [alter , setalter] = useState(false)
  function handerler()
  {
    setalter(!alter)
  }
  return (
    <div>
      {alter ? <Message />:null}
      <button onClick={handerler}>Togole</button>
    </div>
  )
};
function Message()
{
  return <h2>Message</h2>
}
export default App