import React, { useEffect, useState } from "react";
import CreateCards from "../CreateCards";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

function Countrys() {
  const [countrys, setCountrys] = useState([]);
  const [error, setError] = useState(null);
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
  useEffect(() => {
    fecthCountrys();
  }, []);

  console.log("countrys :>>", countrys);
  return (
    <>
      {countrys &&
        countrys.map((country, i) => {
          return <CreateCards country={country} key={i} />;
        })}
    </>
  );
}
export default Countrys;
