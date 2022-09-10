import React from "react";
import { Box } from "@mui/material";

import { GenresCarousel } from "../components/GenresCarousel";
import TrendingCarousel from "../components/TrendingCarousel";
import BasicCarousel from "../components/BasicCarousel";

// import TrendingGrid from "../components/TrendingGrid";

const styles = {
  backgroundBox: {
    height: "1200px",
    width: "100%",

    //ARREGLAR EL LADO DERECHO.........

    display: "flex",
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
};

export const HomeGenres = () => {
  return (
    <>
      <Box backgroundColor="primary.main" style={styles.backgroundBox}>
        <GenresCarousel />
      </Box>
      <TrendingCarousel />
      <BasicCarousel />
    </>
  );
};
