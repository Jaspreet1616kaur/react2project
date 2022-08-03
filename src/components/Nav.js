import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/authContext";
import { signOut } from "firebase/auth";
import { auth } from "../config/config";
function Nav() {
  // here i create login funtion
  const { user, setUser, error } = useContext(AuthContext);
  const redirectTo = useNavigate();
  const login = () => {
    setUser({
      userName: "Jaspreet",
    });
    console.log("IS the user Login : ", user);
    redirectTo("/");
  };

  const logout = () => {
    console.log("now user is logout:", user);
    signOut(auth)
      .then(() => {
        //sign out scccesful.
        setUser(null);
      })
      .catch(() => {
        //an error happend
        console.log("signout error :>>", error);
      });
  };

  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "2rem",
        }}
      >
        <Link to="/">Home</Link> | |
        {!user && <Link to="/register">Register </Link>}| |{" "}
        <Link to="/countrys">Country </Link> | |<Link to="/about">About</Link>
        {user ? (
          <Button variant="danger" onClick={logout}>
            logout{" "}
          </Button>
        ) : (
          <Button variant="info" onClick={login}>
            Login
          </Button>
        )}
      </nav>
    </div>
  );
}

export default Nav;
