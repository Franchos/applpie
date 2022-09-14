import React, { useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";
import axios from "axios";
import MovieCard from "../common/MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { RecommendedSettings } from "../helpers/CarouselSettings";

const RecommendedCarousel = ({ id }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`/movie/${id}/similar`).then(({ data }) => setMovies(data));
  }, [id]);

  return (
    <Box sx={{ minHeight: "0px", minWidth: "0px", m: "7vw" }}>
      <Box sx={{ alignItems: "center" }}>
        <Typography variant="h6" color="white" align="start">
          Did you like it?
        </Typography>
        <Typography variant="h6" color="white" align="start">
          Here are some similar ones
        </Typography>
        <Box sx={{ p: "5vh" }}>
          <Slider {...RecommendedSettings} className="content">
            {movies.results?.map((e, i) => (
              <MovieCard key={i} movie={e} />
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default RecommendedCarousel;
