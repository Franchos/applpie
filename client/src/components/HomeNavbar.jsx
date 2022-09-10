import * as React from "react";
import { AccountCircle } from "@mui/icons-material";
import {
  Button,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

import { SearchBar } from "./SearchBar";
import { useSelector } from "react-redux";

const styles = {
  transparentNavbarStyle: {
    display: "flex",
    justifyContent: "space-around",
    width: "100vw",
    backgroundColor: "transparent",
    boxShadow: "0px 0px 0px 0px",
  },
  coloredNavbarStyle: {
    display: "flex",
    justifyContent: "space-around",
    width: "100vw",
    backgroundColor: "#0F0C08",
    boxShadow: "0px 0px 0px 0px",
  },
  toolbarStyle: {
    display: "flex",
    justifyContent: "space-around",
  },
  buttonStyle: {
    color: "black",
    backgroundColor: "white",
    margin: "5px",
  },
  transparentBox: {
    width: "9vw",
    backgroundColor: "transparent",
  },
};

export function HomeNavbar() {
  const user = useSelector((state) => state.user);
  const [eventListener, setEventListener] = useState(true);
  const [navBackground, setNavBackground] = useState(
    styles.transparentNavbarStyle
  );

  const changeNavbarStyle = () => {
    if (window.scrollY >= 1090) {
      setNavBackground(styles.coloredNavbarStyle);
      setEventListener(false);
    } else {
      setNavBackground(styles.transparentNavbarStyle);
      setEventListener(true);
    }
  };

  window.addEventListener("scroll", changeNavbarStyle);
  window.removeEventListener("scroll", changeNavbarStyle, eventListener);

  return (
    <AppBar position={"fixed"} style={navBackground}>
      <Toolbar style={styles.toolbarStyle}>
        <Typography style={styles.titleStyle} variant="h6" component="div">
          IDKWTW
        </Typography>
        {eventListener ? (
          <Box style={styles.transparentBox}></Box>
        ) : (
          <SearchBar />
        )}
        {!user._id && (
          <Box>
            <Link style={{ textDecoration: "none" }} to="/login">
              <Button
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                style={styles.buttonStyle}
              >
                Login
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/register">
              <Button
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                style={styles.buttonStyle}
              >
                Register
              </Button>
            </Link>
          </Box>
        )}
        {user._id && (
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}
