import * as React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";
import Person4RoundedIcon from "@mui/icons-material/Person4Rounded";
import PendingRoundedIcon from "@mui/icons-material/PendingRounded";
import DoorFrontRoundedIcon from "@mui/icons-material/DoorFrontRounded";
import CottageIcon from "@mui/icons-material/Cottage";

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
import { Link, useNavigate } from "react-router-dom";

const styles = {
  navbarStyle: {
    display: "flex",
    justifyContent: "space-around",
    width: "100vw",
    boxShadow: "0 0 0 0",
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
};

export function MenuAppBar() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" style={styles.navbarStyle}>
      <Toolbar style={styles.toolbarStyle}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            onClick={() => navigate("/")}
            style={styles.titleStyle}
            variant="h6"
            component="div"
          >
            IDKWTW
          </Typography>
          <PendingRoundedIcon color="white" size="large" />
        </Box>
        <SearchBar />
        <Box>
          {!user._id && (
            <>
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
            </>
          )}
          {user._id && (
            <Box>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={() => navigate(`/`)}
              >
                <CottageIcon />
              </IconButton>
              <IconButton
                // size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={() => navigate(`/user/${user._id}`)}
              >
                <Person4RoundedIcon fontSize="medium" />
              </IconButton>
              <IconButton
                // size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <DoorFrontRoundedIcon fontSize="medium" />
              </IconButton>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
