import React, { useContext } from "react";
import { AuthContext } from "../components/context/authContext";
import { CharactersContext } from "../components/context/charactersContext";
import homeimage from "../images/home.webp";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
function Home() {
  const { Countrys } = useContext(CharactersContext);
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>welcome in our Countries website</h2>
      {user && <h4>welcome to {user.email} </h4>}
      {/* picture of the worl / map of the world */}
      <img src={homeimage}></img>
      <h2>
        CountryReports delivers unique content on Culture, Countries and Travel
        from<br></br> around the world Students, tourists, libraries, business
        and researchers appreciate<br></br> our ability deliver hard to find,
        fun and current information. Get started, pick a country!
      </h2>

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
