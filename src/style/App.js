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
import Register from "../views/Register";
import { app } from "../config/config";
import Login from "../views/Login";

function App() {
  // console.log("app", app);
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
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="about" element={<About />} />

            <Route path="*" element={<NoMatch />} />
          </Routes>
        </CharactersContextProvider>
      </AuthContextProvider>
    </div>
  );
}
export default App;
