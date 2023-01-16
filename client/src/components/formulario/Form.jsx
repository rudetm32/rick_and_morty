import React, { useState } from "react";
import validate from "../validate";
import s from "./Form.module.css"

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
    <div className={s.container}>
      <form onSubmit={(e)=>{
        handleSubmit(e)
      }}>
        <br />
        <label>Username</label>
        <input
        className={errors.username && s.warning}
          type="text"
          name="username"
          placeholder="Ingrese usuario..."
          onChange={(e) => handleInput(e)}
        ></input>
        <p className={s.danger}>{errors.username}</p>
        <br />
        <br/>
        <label>Password</label>
        <input
        className={errors.password && s.warning}
          type="password"
          name="password"
          placeholder="Ingrese password..."
          onChange={(e) => handleInput(e)}
        ></input>
        <p className={s.danger}>{errors.password}</p>  
        <br />
        <br />
        <div> 

              <button className={s.btn} type="submit">Ingresar</button> 
        </div>
        <br />
      </form>
    </div>
  );
}
