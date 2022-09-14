import React, { useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";
import axios from "axios";
import MovieCard from "../common/MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { TrendingSettings } from "../helpers/CarouselSettings";

const TrendingCarousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("/trending/week").then(({ data }) => {
      setMovies(data);
    });
  }, []);

  return (
    <Box sx={{ minHeight: "0px", minWidth: "0px", m: "10vw" }}>
      <Box sx={{ alignItems: "center" }}>
        <Typography variant="h6" align="start">
          Fresh from the oven
        </Typography>
        <Box sx={{ p: "5vh" }}>
          <Slider {...TrendingSettings} className="content">
            {movies.results?.map((e, i) => (
              <MovieCard key={i} movie={e} />
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default TrendingCarousel;
