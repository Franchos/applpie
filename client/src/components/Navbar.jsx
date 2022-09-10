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
  },
  toolbarStyle: {
    display: "flex",
    justifyContent: "space-around",
  },
  buttonStyle: {
    color: "#e0e1e1",
    backgroundColor: "grey",
  },
};

export function MenuAppBar() {
  const user = useSelector((state) => state.user);

  return (
    <AppBar position="fixed" style={styles.navbarStyle}>
      <Toolbar style={styles.toolbarStyle}>
        <Typography style={styles.titleStyle} variant="h6" component="div">
          IDKWTW
        </Typography>
        <SearchBar />
        {!user._id && (
          <>
            <Link to="/login">
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
          </>
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
