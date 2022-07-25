import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CreateCards from "../CreateCards";
import Search from "./Search";
import SelectSearch from "./SelectSearch";

function Countrys() {
  const [countrys, setCountrys] = useState([]);
  const [error, setError] = useState(null);
  const [filterResult, setFilterResult] = useState("");
  const fecthCountrys = async () => {
    try {
      const response = await fetch("https://restcountries.com/v2/all");
      const results = await response.json();
      console.log(results);
      setCountrys(results);
    } catch (error) {
      console.log("error  :>>", error.message);
      setError(error.message);
    }
  };
  //here i create a serach filtering
  const inputWord = (event) => {
    setFilterResult(event.target.value);
  };
  const filterCountry = !filterResult
    ? countrys
    : countrys.filter((item) => {
        return item.name.toLowerCase().includes(filterResult.toLowerCase());
      });
  console.log("filterCountry:>>", filterCountry);

  useEffect(() => {
    fecthCountrys();
  }, []);

  console.log("countrys :>>", countrys);
  return (
    <div>
      <Search inputWord={inputWord} />
      <SelectSearch countrys={countrys} />
      {filterCountry &&
        filterCountry.map((country, i) => {
          return <CreateCards country={country} key={i} />;
        })}
    </div>
  );
}

export default Countrys;
