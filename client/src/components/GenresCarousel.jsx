import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import genresWallpaper from "../assets/genresWallpaper.json";
import GenresCard from "../common/GenresCard";

import { GenresSettings } from "../helpers/CarouselSettings";
import { Box, Typography } from "@mui/material";

// backgroundImage: `url(${genresWallpaper["genres"][3]["image"]})`,

export const GenresCarousel = () => {
  return (
    <Box sx={{ minHeight: "0px", minWidth: "0px" }}>
      <Box
        sx={{
          margin: "3vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Typography variant="h3" color="white" sx={{ padding: 0 }}>
          CHOOSE A GENRE
        </Typography>
      </Box>
      <Slider {...GenresSettings}>
        {genresWallpaper["genres"].map((e, i) => (
          <GenresCard movie={e} />
        ))}
      </Slider>
      <Box
        sx={{
          paddingTop: "20vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Typography variant="h6" color="white">
          Still don't know what to watch?
        </Typography>
        <Typography variant="h6" color="white" sx={{ marginTop: "50px" }}>
          Keep scrolling down...
        </Typography>
      </Box>
    </Box>
  );
};
