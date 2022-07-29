import React, { useContext } from "react";
import { AuthContext } from "../components/context/authContext";
import { CharactersContext } from "../components/context/charactersContext";
import homeimage from "../images/home.webp";
import { Link } from "react-router-dom";
function Home() {
  const { Countrys } = useContext(CharactersContext);
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>welcome in our Countries website</h2>
      {user && <h4>welcome to {user.userName} </h4>}
      {/* picture of the worl / map of the world */}
      <img src={homeimage}></img>
      <h2>
        CountryReports delivers unique content on Culture, Countries and Travel
        from<br></br> around the world Students, tourists, libraries, business
        and researchers appreciate<br></br> our ability deliver hard to find,
        fun and current information. Get started, pick a country!
      </h2>
      <button>
        {" "}
        <Link to="countrys">Button </Link>
      </button>
    </div>
  );
}

export default Home;
