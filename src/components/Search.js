import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function Search({ inputWord }) {
  // console.log("country: ", countrys);
  // const [name, setName] = useState("");
  // const handleSelectChange = (e) => {
  //   setName(e.target.value);
  // };
  // console.log("name: ", name);
  // const continents = [];
  // filterCountry &&
  //   filterCountry.forEach((country, i) => {
  //     continents.push(country.region);
  //   });

  // const removedDoubles = [...new Set(continents)];
  // console.log("removedDoubles: ", removedDoubles);
  // console.log("continents: ", continents);
  const [status, setStatus] = useState("");
  const statusChanged = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <input
        className="in"
        type="text"
        id="header-search.."
        placeholder="Please Search Here"
        name="s"
        onChange={inputWord}
        style={{ border: "1px solid black" }}
      />
      {/* <select onChange={handleSelectChange}>
        <option value={"first"}>Select Here</option>
        {filterCountry &&
          removedDoubles.map((continent, i) => {
            return (
              <option value={name} key={i}>
                {continent}
              </option>
            );
          })}
      </select> */}
      ::::::::::
      <select>
        <option value={status} onChange={statusChanged}>
          Open this select menu
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </option>
      </select>
    </div>
  );
}

export default Search;
