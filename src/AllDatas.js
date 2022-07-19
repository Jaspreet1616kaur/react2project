import React, { useEffect, useState } from "react";
import Cards from "./Cards";
function AllDatas() {
  const [allDatas, setAllDatas] = useState(null);
  const fecthAllDatas = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const results = await response.json();
      console.log(results);
      setAllDatas(results.networks);
      console.log("datas:>>", results.networks);
    } catch (error) {
      console.log("error :>>", error);
    }
  };
  useEffect(() => {
    fecthAllDatas();
  }, []);

  console.log("allDatas: ", allDatas);
  // const test =
  //   allDatas &&
  //   allDatas.map((data) => {
  //     return console.log(data.id);
  //   });
  return (
    <div>
      {allDatas &&
        allDatas.map((data) => {
          return <Cards data={data} />;
        })}
    </div>
  );
}
export default AllDatas;
