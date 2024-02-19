
import React from "react";
const User = (props) => {
  const {img,name,age ,id, getid} = props;
  console.log(props);
  return (
    <React.StrictMode>
    <article>
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>Age:{age}</p>
      <button onClick={() => getid(id)}>Remove</button>
    </article>
    </React.StrictMode>
  )
}

export default User