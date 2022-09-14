import { Box } from "@mui/material";
import React from "react";
import { Outlet, useParams } from "react-router-dom";
import RecommendedCarousel from "../common/RecommendedCarousel";
import { TrailerMovie } from "../components/TrailerMovie";
import { Movie } from "./Movie";

export const MovieProfile = () => {
  const { id } = useParams();

  return (
    <Box
      sx={{
        overflowX: "hidden",
        backgroundColor: "primary.main",
      }}
    >
      <Movie id={id} />
      {/* <TrailerMovie id={id} /> */}
      <RecommendedCarousel id={id} />
      <Outlet />
    </Box>
  );
};
