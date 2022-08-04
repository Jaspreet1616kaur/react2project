import React from "react";
import { Route, Routes } from "react-router-dom";
import Countrys from "../components/Countrys";
import Home from "../views/Home";
import NoMatch from "../views/NoMatch";
import Details from "../views/Details";
import ProtectedRoute from "../components/ProtectedRoute";
import Register from "../views/Register";
// import { app } from "../config/config";
import Login from "../views/Login";
import Chat from "../views/Chat";
import { AuthContextProvider } from "../context/authContext";
import { CharactersContextProvider } from "../context/charactersContext";
import TestNavBar from "../components/TestNavBar";

function App() {
  // console.log("app", app);
  return (
    <div className="APP">
      <h2>Rest Countries</h2>
      {/* <Countrys /> */}
      <AuthContextProvider>
        <TestNavBar />
        {/* <Nav /> */}
        <CharactersContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="countrys"
              element={
                <ProtectedRoute>
                  <Countrys />
                </ProtectedRoute>
              }
            />
            <Route
              path="chat"
              element={
                <ProtectedRoute>
                  {" "}
                  <Chat />{" "}
                </ProtectedRoute>
              }
            />

            <Route
              path="/countrys/:name"
              element={
                <ProtectedRoute>
                  <Details />
                </ProtectedRoute>
              }
            />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="chat" element={<Chat />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </CharactersContextProvider>
      </AuthContextProvider>
    </div>
  );
}
export default App;
