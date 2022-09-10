import * as React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";

import {
  Button,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";

import { useSelector } from "react-redux";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";

const styles = {
  navbarStyle: {
    display: "flex",
    justifyContent: "space-around",
    width: "100vw",
    backgroundColor: "transparent",
    boxShadow: "0px 0px 0px 0px",
  },
  toolbarStyle: {
    display: "flex",
    justifyContent: "space-around",
  },
  buttonStyle: {
    color: "white",
    backgroundColor: "#0F0C08",
    // textDecoration: "none",
  },
  titleStyle: {
    color: "#0F0C08",
  },
};

export function BackNavbar() {
  const user = useSelector((state) => state.user);

  return (
    <AppBar position="fixed" style={styles.navbarStyle}>
      <Toolbar style={styles.toolbarStyle}>
        <Typography style={styles.titleStyle} variant="h6" component="div">
          IDKWTW
        </Typography>

        {!user._id && (
          <>
            <Link style={{ textDecoration: "none" }} to="/">
              <Button
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                style={styles.buttonStyle}
              >
                Home
              </Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
