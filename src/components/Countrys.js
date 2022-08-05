import React, { useContext, useEffect, useState } from "react";
import { Form, Row } from "react-bootstrap";
import CreateCards from "../CreateCards";
import Search from "./Search";
import homeimage from "../images/sad.jpg";

import { CharactersContext } from "../context/charactersContext";
function Countrys() {
  const [filterResult, setFilterResult] = useState("");

  const [population, setPopulation] = useState(null);
  const { countrys, error, fecthCountrys } = useContext(CharactersContext);
  // here i create a serach filtering
  const inputWord = (event) => {
    setFilterResult(event.target.value);
  };

  // serach bar filtering
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
      <Search inputWord={inputWord} population={population} />
      <Form.Label filterCountry={filterCountry} countrys={countrys} />

      <Row xs={1} sm={2} md={4} lg={4} xl={6} className="g-4">
        {filterCountry.length !== 0 ? (
          filterCountry.map((country, i) => {
            return <CreateCards country={country} key={i} />;
          })
        ) : (
          <h1>
            Sorry Not Match Our Countries
            <img src={homeimage}></img>
          </h1>
        )}
      </Row>
    </div>
  );
}

export default Countrys;
