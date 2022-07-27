import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
function Nav() {
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
      </nav>
    </div>
  );
}

export default Nav;
