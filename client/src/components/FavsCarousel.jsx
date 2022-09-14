import React, { useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";
import axios from "axios";
import MovieCard from "../common/MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { FavsSettings } from "../helpers/CarouselSettings";

export const FavsCarousel = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <Box>
        <Box sx={{ minHeight: "0px", minWidth: "0px", m: "5vw" }}>
          <Box sx={{ alignItems: "center" }}>
            <Box margin="2vh">
              <Typography variant="h6">This are your favorites...</Typography>
            </Box>
            <Box
              sx={{
                p: "5vh",
                paddingBottom: "3vh",
                backgroundColor: "primary.main",
                borderRadius: "10px",
              }}
            >
              <Slider {...FavsSettings} className="content">
                {user.favorites?.map((e, i) => (
                  <MovieCard key={i} movie={e} />
                ))}
              </Slider>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
