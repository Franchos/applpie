import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

import genres from "../assets/genresWallpaper.json";
import { useNavigate } from "react-router-dom";

export const NavbarInsideGenres = ({ category }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "40vh",
        backgroundColor: "primary.main",
        // borderRadius: "2vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "50vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          sx={{
            width: "50vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {genres.genres.map((e, i) => (
            <Grid item>
              <Button
                size="large"
                variant="text"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  m: "20px",
                  backgroundColor: e.name === category ? "#fff" : "transparent",
                  color: e.name === category ? "#black" : "#fff",
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "black",
                  },
                }}
                key={i}
                onClick={() => navigate(`/category/${e.name}`)}
              >
                {e.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
    // <></>
  );
};
