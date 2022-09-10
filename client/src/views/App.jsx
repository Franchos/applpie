import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import TrendingGrid from "../components/TrendingGrid";
import { Register } from "./Register";
import { Login } from "./Login";
import Home from "./Home";
import { WithoutNavBar } from "./FrontDoor";
import { WithNavBar } from "./RoomDoor";
import { HomeGenres } from "./HomeGenres";
import { BackDoor } from "./BackDoor";
import { Movie } from "./Movie";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route element={<WithoutNavBar />}>
          <Route path="/" element={<HomeGenres />} />
        </Route>
        <Route element={<WithNavBar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/genre" element={<TrendingGrid />} />
          <Route path="/movies/:id" element={<Movie />} />
          {/* <Route path="/genres" element={<GenresNames />} /> */}
          <Route
            path="*"
            element={
              <main style={{ marginTop: "13vh" }}>
                <p>Ups... there's nothing here!</p>
              </main>
            }
          />
        </Route>
        <Route element={<BackDoor />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
