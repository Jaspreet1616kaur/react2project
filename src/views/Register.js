import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { auth } from "../config/config";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { Form } from "react-bootstrap";
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
    <Container>
      <h2>Registration</h2>
      <form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleEmailHandler}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordlHandler}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleRegisterHandler}>
          Register
        </Button>
        {/* <Link to="/login">if you have account ? then , go to login</Link> */}
      </form>
    </Container>
  );
}

export default Register;
