import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <h1>No Match With your Infotmation!!</h1>
      <p>
        <Link to="/">go to home</Link>
      </p>
    </div>
  );
}

export default NoMatch;
