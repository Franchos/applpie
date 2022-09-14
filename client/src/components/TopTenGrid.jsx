import React from "react";
import { Grid, Box, Paper, Container, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../common/MovieCard";

export const TopTenGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("/movies/top_rated").then(({ data }) => {
      setMovies(data.results);
    });
  }, []);

  const slicedMovies = movies.slice(0, 10);

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        m: "10vh",
        flexDirection: "column",
      }}
    >
      <Typography color="white" variant="h6" sx={{ marginTop: "4vh" }}>
        BASICS TOP 10
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: "3vw",
        }}
      >
        <Grid
          container
          rowSpacing={2}
          alignItems="center"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {slicedMovies?.map((e, i) => (
            <>
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "primary.main",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  m: "0.5vh",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "transparent",
                    width: "83%",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "10px",
                    marginTop: "1vh",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#fff",
                    }}
                  >
                    {i + 1}
                  </Typography>
                </Box>

                <Grid item rowSpacing={-2} lg={10}>
                  <MovieCard key={i} movie={e} />
                </Grid>
              </Box>
            </>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
