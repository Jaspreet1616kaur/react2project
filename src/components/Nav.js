import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/authContext";

import Search from "./Search";
function Nav() {
  // here i create login funtion
  const { user, setUser } = useContext(AuthContext);
  const login = () => {
    console.log(user);
    setUser({
      userName: "Jaspreet",
    });
  };
  const logout = () => {
    console.log(user);
    setUser(null);
  };
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "2rem",
        }}
      >
        <Link to="/">Home</Link> | <Link to="countrys">Country </Link> | {""}
        <Link to="about">About</Link>
        {/* // here i have create a login button  */}
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
