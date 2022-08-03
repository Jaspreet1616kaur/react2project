import { blue } from "@mui/material/colors";
import { border, textAlign } from "@mui/system";
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
      <h2 style={{ textAlign: "center", border: "double", color: "blue " }}>
        Login
      </h2>
      <label htmlFor="email">
        {" "}
        <h2>Email </h2>
      </label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleEmailHandler}
      />
      <br></br>
      <label htmlFor="password">
        {" "}
        <h2>password </h2>
      </label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={handlePasswordlHandler}
      />
      <br></br>
      <button onClick={handleLoginHandler} style={{ backgroundColor: "green" }}>
        Login
      </button>
      <Link to="/register" style={{ color: "green" }}>
        ........if you DON'T have an Account register here first.
      </Link>
    </div>
  );
}

export default Login;
