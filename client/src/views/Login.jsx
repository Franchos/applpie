import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Box, Button, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import React, { useState } from "react";
import wallpaperMovie from "../assets/wallpaperMovies.json";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../state/user";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2),
  },
  "& .MuiInputBase-input": {
    position: "justify",
    backgroundColor: theme.palette.secondary.second,
    borderRadius: "3px",
    fontSize: 16,
    width: "19.5vw",
    paddingLeft: "0.5vw",
    color: "#e0e1e1",
  },
}));

const styles = {
  WallpaperStyle: {
    backgroundImage: `url(${wallpaperMovie[0]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
  },
  BoxStyle: {
    borderRadius: "7px",
    height: "35vh",
    width: "40vw",
  },
  InputStyle: {
    color: "#e0e1e1",
    padding: "0px, 15px, 15px, 0px",
  },
  FormControlStyle: {},
  submitStyle: {
    margin: "2.2vh",
    backgroundColor: "white",
    width: "20vw",
  },
};

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    axios
      .post("/auth/login", {
        email,
        password,
      })
      .then(({ data }) => dispatch(loginUser(data)))
      .then(() => navigate("/"));
  };

  useEffect(() => {
    axios.get("/auth/me").then(({ data }) => data.email && navigate("/"));
  }, []);

  return (
    <Box
      style={styles.WallpaperStyle}
      display="flex"
      justifyContent="center"
      alignItems="center"
      //   sx={{ paddingTop: "9vh", backgroundColor: "red" }}
    >
      <Box
        style={styles.BoxStyle}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        backgroundColor="primary.main"
      >
        <Typography color="#e0e1e1" variant="h5">
          Glad to see u!
        </Typography>
        <Box sx={{ padding: "1vh" }}>
          <FormControl
            style={styles.FormControlStyle}
            variant="standard"
            required
          >
            <InputLabel style={styles.InputStyle} shrink>
              EMAIL
            </InputLabel>
            <BootstrapInput
              id="bootstrap-input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl variant="standard" required>
            <InputLabel style={styles.InputStyle} shrink>
              PASSWORD
            </InputLabel>
            <BootstrapInput
              id="bootstrap-input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
        </Box>
        <Box>
          <Button
            style={styles.submitStyle}
            onClick={() => {
              handleSubmit();
            }}
          >
            SUBMIT
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
