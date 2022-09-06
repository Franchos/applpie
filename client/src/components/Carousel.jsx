import React, { useEffect } from "react";
import Slider from "react-slick";
import { Box, Paper, styled } from "@mui/material";
import { getMovies } from "../state/movies";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import MovieCard from "../common/Card";

const TrendingCarousel = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "#000000",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const settings = {
    // zoomFactor: 20,
    // dots: true,
    // infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // pauseOnHover: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    axios.get("/trending/week").then(({ data }) => {
      dispatch(getMovies(data));
      console.log(movies);
    });
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        height: "360px",
        width: "full",
        overflow: "hidden",
        mt: "27px",
        paddingTop: 20,
        py: "-20px",
        mb: "50px",
      }}
    >
      <Slider {...settings}>
        {movies.results?.map((e, i) => (
          <MovieCard
            key={i}
            title={e.title}
            poster_path={e.poster_path}
            id={e.id}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default TrendingCarousel;
