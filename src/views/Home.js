import React, { useContext } from "react";

import homeimage from "../images/home.webp";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { CharactersContext } from "../context/charactersContext";
import { AuthContext } from "../context/authContext";
function Home() {
  const { Countrys } = useContext(CharactersContext);
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2 className="pic">welcome in our Countries website</h2>
      {user && <h4>welcome to {user.email} </h4>}
      {/* picture of the worl / map of the world */}
      <img src={homeimage}></img>
      <h4>
        if you want more information about every country just click on button{" "}
      </h4>

      <div className="button">
        <Button variant="info">
          <Link to="countrys">Button </Link>{" "}
        </Button>
      </div>
    </div>
  );
}

export default Home;
