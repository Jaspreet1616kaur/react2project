import React, { useEffect, useState } from "react";
import CreateCards from "../CreateCards";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

function AllDatas() {
  const [allDatas, setAllDatas] = useState([]);
  const [error, setError] = useState(null);
  const fecthAllDatas = async () => {
    try {
      const response = await fetch("https://restcountries.com/v2/all");
      const results = await response.json();
      console.log(results);
      setAllDatas(results);
      //allways in console write a 2 word captial letter
    } catch (error) {
      console.log("error  :>>", error.message);
      setError(error.message);
    }
  };
  useEffect(() => {
    fecthAllDatas();
  }, []);

  console.log("allDatas :>>", allDatas);
  return (
    <>
      {allDatas &&
        allDatas.map((country, i) => {
          return <CreateCards country={country} key={i} />;
        })}
    </>
  );
}
export default AllDatas;
