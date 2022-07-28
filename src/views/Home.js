import React, { useContext } from "react";
import { AuthContext } from "../components/context/authContext";
import { CharactersContext } from "../components/context/charactersContext";

function Home() {
  const { Countrys } = useContext(CharactersContext);
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>Home</h2>
      {user && <h4>welcome {user.userName}</h4>}
      {/* picture of the worl / map of the world */}
      <h2>All the information about every country , just one click away</h2>
      {/* Link that takes to the list of coutries */}
    </div>
  );
}

export default Home;
