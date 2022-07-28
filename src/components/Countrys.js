import React, { useContext, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CreateCards from "../CreateCards";
import { CharactersContext } from "./context/charactersContext";
import Search from "./Search";

function Countrys() {
  const [filterResult, setFilterResult] = useState("");
  const { countrys, error, fecthCountrys } = useContext(CharactersContext);

  // here i create a serach filtering
  const inputWord = (event) => {
    setFilterResult(event.target.value);
    // console.log("event.target.value: ", event.target.value);
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

  return (
    <div>
      <Search
        filterCountry={filterCountry}
        countrys={countrys}
        inputWord={inputWord}
      />

      <Row xs={1} sm={2} md={4} lg={4} xl={6} className="g-4">
        {filterCountry.length !== 0 ? (
          filterCountry.map((country, i) => {
            return <CreateCards country={country} key={i} />;
          })
        ) : (
          <h2>your search is not match with countrys</h2>
        )}
      </Row>
    </div>
  );
}

export default Countrys;
