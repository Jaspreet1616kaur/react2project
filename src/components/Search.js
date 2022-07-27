import React, { useState } from "react";

function Search({ inputWord, countrys, filterCountry }) {
  console.log("country: ", countrys);
  const [name, setName] = useState("");
  const handleSelectChange = (e) => {
    setName(e.target.value);
  };
  console.log("name: ", name);
  const continents = [];
  filterCountry &&
    filterCountry.forEach((country, i) => {
      continents.push(country.region);
    });

  const removedDoubles = [...new Set(continents)];
  console.log("removedDoubles: ", removedDoubles);
  console.log("continents: ", continents);

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
      <select onChange={handleSelectChange}>
        <option value={"first"}>Select Here</option>
        {filterCountry &&
          removedDoubles.map((continent, i) => {
            return (
              <option value={name} key={i}>
                {continent}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default Search;
