//1import hook
import { createContext, useEffect, useState } from "react";
//2.create Context/store
export const CharactersContext = createContext();
//3 Create provider

export const CharactersContextProvider = (props) => {
  // console.log("props :=>", props);
  //4move stae and function
  const [countrys, setCountrys] = useState([]);
  const [error, setError] = useState(null);

  const fecthCountrys = async () => {
    try {
      const response = await fetch("https://restcountries.com/v2/all");
      const results = await response.json();
      //   console.log(results);
      setCountrys(results);
    } catch (error) {
      console.log("error  :>>", error.message);
      setError(error.message);
    }
  };

  //mdify context data from comoponent
  //5: return the provieder with its value and insrt childern  component
  return (
    <CharactersContext.Provider
      value={{ countrys, setCountrys, error, fecthCountrys }}
    >
      {props.children}
    </CharactersContext.Provider>
  );
};
