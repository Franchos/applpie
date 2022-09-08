import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import MenuAppBar from "./Navbar";

const App = () => {
  return (
    <>
      <MenuAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
