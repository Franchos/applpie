import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline } from "@mui/material";
// import "";

// import TrendingGrid from "../common/CategoryGrid";
import { Register } from "./Register";
import { Login } from "./Login";
import { WithoutNavBar } from "./FrontDoor";
import { WithNavBar } from "./RoomDoor";
import { HomeGenres } from "./HomeGenres";
import { BackDoor } from "./BackDoor";
import { MovieProfile } from "./MovieProfile";
import "./styles.css";
import { UserProfile } from "./UserProfile";
import { InsideGenre } from "./InsideGenre";
import { NonExistent } from "./NonExistent";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route element={<WithoutNavBar />}>
          <Route path="/" element={<HomeGenres />} />
        </Route>
        <Route element={<WithNavBar />}>
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/movie/:id" element={<MovieProfile />} />
          <Route path="/category/:category" element={<InsideGenre />} />
        </Route>
        <Route element={<BackDoor />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<NonExistent />} />
      </Routes>
    </>
  );
};

export default App;
