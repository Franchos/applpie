import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import MovieCard from "../common/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BasicSettings } from "../helpers/CarouselSettings";

const BasicCarousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("/movies/top_rated").then(({ data }) => {
      setMovies(data);
    });
  }, []);

  return (
    <>
      <Box
        align="justify"
        sx={{
          m: "10vh 2.8vh 2.8vh",
        }}
      >
        <Typography variant="h6" align="start">
          Basic movies...
        </Typography>
        <Slider {...BasicSettings} className="content">
          {movies.results?.map((e, i) => (
            <MovieCard
              key={i}
              title={
                e.title.length > 20 ? e.title.substring(0, 20) + "..." : e.title
              }
              poster_path={e.poster_path}
              id={e.id}
            />
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default BasicCarousel;
