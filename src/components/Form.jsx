import React, { useState } from "react";
import { Link } from "react-router-dom";
import validate from "./validate";

export default function Form() {
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
  return (
    <div>
      <form>
        <label>username</label>
        <input
          type="text"
          name="username"
          placeholder="type name"
          onChange={(e) => handleInput(e)}
        ></input>
        <label>password</label>
        <input
          type="password"
          name="password"
          placeholder="type pass"
          onChange={(e) => handleInput(e)}
        ></input>
        <div>
          <Link to="/home">
            {Object.keys(errors).length === 0 ?
              (
              <button type="submit">submit</button>
              )
              : null}
          </Link>
        </div>
      </form>
    </div>
  );
}
