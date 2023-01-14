import React, { useState } from "react";
import validate from "../validate";

export default function Form(props) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  function handleInput(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.login(userData);
    
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        handleSubmit(e)
      }}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="type name"
          onChange={(e) => handleInput(e)}
        ></input>
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="type pass"
          onChange={(e) => handleInput(e)}
        ></input>
        <div>          
              <button type="submit">submit</button> 
        </div>
      </form>
    </div>
  );
}
