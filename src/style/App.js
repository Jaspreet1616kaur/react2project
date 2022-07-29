import React from "react";
import { Route, Routes } from "react-router-dom";
import Countrys from "../components/Countrys";
import Home from "../views/Home";
import About from "../views/About";
import Nav from "../components/Nav";
import NoMatch from "../views/NoMatch";
import Details from "../views/Details";
import { CharactersContextProvider } from "../components/context/charactersContext";
import { AuthContextProvider } from "../components/context/authContext";
import ProtectedRoute from "../components/ProtectedRoute";

function App() {
  return (
    <div className="APP">
      <h2>Rest Countries</h2>
      {/* <Countrys /> */}
      <AuthContextProvider>
        <Nav />
        <CharactersContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="countrys"
              element={
                <ProtectedRoute>
                  {" "}
                  <Countrys />{" "}
                </ProtectedRoute>
              }
            />
            <Route path="/countrys/:name" element={<Details />} />
            <Route path="about" element={<About />} />

            <Route path="*" element={<NoMatch />} />
          </Routes>
        </CharactersContextProvider>
      </AuthContextProvider>
    </div>
  );
}
export default App;
