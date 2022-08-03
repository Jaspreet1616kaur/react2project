import React from "react";
import { useState, useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordlHandler = (e) => {
    setPassword(e.target.value);
  };
  const handleLoginHandler = () => {
    login(email, password);
  };
  return (
    <div>
      {" "}
      <h2>Login</h2>
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
      <button onClick={handleLoginHandler}>Login</button>
      <Link to="/register">No Account ?Register First </Link>
    </div>
  );
}

export default Login;
