import React, { useContext } from "react";
import { useState } from "react";

import { auth } from "../config/config";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
function Register() {
  console.log("auth :>> ", auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(AuthContext);

  const handleEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordlHandler = (e) => {
    setPassword(e.target.value);
  };
  const handleRegisterHandler = () => {
    //check if email is valid ,password lenght......
    register(email, password);
  };
  return (
    <div>
      <h2>Register</h2>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleEmailHandler}
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={handlePasswordlHandler}
      />
      <button onClick={handleRegisterHandler}>Register</button>
      <Link to="/login">
        {" "}
        <br></br>
        if you have account, go to login
      </Link>
    </div>
  );
}

export default Register;
