import { signOut } from "firebase/auth";
import { auth } from "../config/config";
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

function TestNavBar() {
  const { user, setUser } = useContext(AuthContext);
  console.log("user>>><", user);
  const redirectTo = useNavigate();

  const logout = () => {
    console.log("now user is logout:", user);
    signOut(auth)
      .then(() => {
        //sign out scccesful.
        setUser(null);
        alert("user is logged out");
        redirectTo("login");
      })
      .catch((error) => {
        //an error happend
        console.log("signout error :>>", error);
      });
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="countrys">Countries</Nav.Link>
            <Nav.Link href="chat">Chat</Nav.Link>
            {user ? (
              <Button
                variant="primary"
                style={{ width: "5rem" }}
                onClick={logout}
              >
                Logout
              </Button>
            ) : (
              <Nav.Link href="login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TestNavBar;
