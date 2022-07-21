import React from "react";
import { Route, Routes } from "react-router-dom";
import AllDatas from "../Component/AllDatas";
import Home from "../viwes/Home";
import About from "../viwes/About";
import Nav from "../Component/Nav";
import NoMatch from "../viwes/NoMatch";
import Details from "../viwes/Details";

function App() {
  return (
    <div className="APP">
      <h2>Rest Countries</h2>
      {/* <AllDatas /> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="allDatas" element={<AllDatas />} />
        <Route path=":allDatas/capital" element={<Details />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}
export default App;
