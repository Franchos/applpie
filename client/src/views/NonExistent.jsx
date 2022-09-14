//rutas no existentes
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const NonExistent = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "primary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "40vw",
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          alignContent: "center",
          marginBottom: "10vh",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography color="#fff" sx={{ fontSize: "20vh" }}>
            4
          </Typography>
          <img
            style={{
              borderRadius: "60%",
              width: "17vh",
              height: "18vh",
              filter:
                "brightness(200%) saturate(0%) hue-rotate(0deg) grayscale(0%)",
            }}
            src="https://c.tenor.com/Q9eT6RZX8WsAAAAd/mgm-maitredj.gif"
          ></img>
          <Typography color="#fff" sx={{ fontSize: "20vh" }}>
            4
          </Typography>
        </Box>
        <Typography variant="h4" color="#fff">
          Page not found
        </Typography>
        <Typography variant="h6" color="#fff" sx={{ m: "2vh" }}>
          Maybe you want to go home..
        </Typography>
        <Box>
          <Button
            sx={{
              backgroundColor: "#fff",
              color: "#black",
              "&:hover": {
                backgroundColor: "#fff",
                color: "black",
              },

              //   "&hover": { color: "#000", backgroundColor: "#fff" },
            }}
            onClick={() => navigate("/")}
          >
            Home
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
