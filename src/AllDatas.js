import React, { useEffect, useState } from "react";
import Card from "./Card";
function AllDatas() {
  const [allDatas, setAllDatas] = useState(null);
  const fecthAllDatas = async () => {
    try {
      const response = await fetch("http://api.citybik.es/v2/networks");
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
  const test = allDatas.map((data) => {
    return console.log(data);
  });
  return <div></div>;
}
export default AllDatas;
