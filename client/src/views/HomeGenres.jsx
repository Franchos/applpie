import React, { useEffect } from "react";
import { Box } from "@mui/material";

import { GenresCarousel } from "../components/GenresCarousel";
import TrendingCarousel from "../components/TrendingCarousel";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "../state/user";
import { TopTenGrid } from "../components/TopTenGrid";

const styles = {
  backgroundBox: {
    height: "120vh",
    display: "flex",
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    overflowX: "hidden",
  },
};

export const HomeGenres = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/auth/me").then(({ data }) => dispatch(setUser(data)));
  }, [dispatch]);

  return (
    <>
      <Box backgroundColor="primary.main" style={styles.backgroundBox}>
        <GenresCarousel />
      </Box>
      <TopTenGrid />
      <TrendingCarousel />
    </>
  );
};
