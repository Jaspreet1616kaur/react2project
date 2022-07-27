import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CreateCards from "../CreateCards";
import Search from "./Search";

function Countrys() {
  const [countrys, setCountrys] = useState([]);
  const [error, setError] = useState(null);
  const [filterResult, setFilterResult] = useState("");
  const fecthCountrys = async () => {
    try {
      const response = await fetch("https://restcountries.com/v2/all");
      const results = await response.json();
      // console.log(results);
      setCountrys(results);
    } catch (error) {
      console.log("error  :>>", error.message);
      setError(error.message);
    }
  };
  //here i create a serach filtering
  const inputWord = (event) => {
    setFilterResult(event.target.value);
    // console.log("event.target.value: ", event.target.value);
  };
  const filterCountry = !filterResult
    ? countrys
    : countrys.filter((item) => {
        return item.name.toLowerCase().includes(filterResult.toLowerCase());
      });
  // console.log("filterCountry:>>", filterCountry);

  useEffect(() => {
    fecthCountrys();
  }, []);

  return (
    <div>
      <Search
        filterCountry={filterCountry}
        countrys={countrys}
        inputWord={inputWord}
      />

      <Row xs={1} sm={2} md={4} lg={4} xl={6} className="g-4">
        {filterCountry &&
          filterCountry.map((country, i) => {
            return <CreateCards country={country} key={i} />;
          })}
      </Row>
    </div>
  );
}

export default Countrys;
