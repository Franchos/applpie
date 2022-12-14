import * as React from "react";
import { AccountCircle } from "@mui/icons-material";
import Person4RoundedIcon from "@mui/icons-material/Person4Rounded";
import PendingRoundedIcon from "@mui/icons-material/PendingRounded";
import DoorFrontRoundedIcon from "@mui/icons-material/DoorFrontRounded";
import {
  Button,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { SearchBar } from "./SearchBar";
import { useSelector } from "react-redux";
import { ModalSearching } from "./ModalSearching";
import { useEffect } from "react";

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
  const navigate = useNavigate();
  const [dialog, setDialog] = React.useState(false);
  const [eventListener, setEventListener] = useState(true);
  const [navBackground, setNavBackground] = useState(
    styles.transparentNavbarStyle
  );

  // console.log(user);

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

  const handleLogout = () => {
    axios.post("/auth/logout");
  };

  return (
    <>
      <AppBar position={"fixed"} style={navBackground}>
        <Toolbar style={styles.toolbarStyle}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography style={styles.titleStyle} variant="h6" component="div">
              IDKWTW
            </Typography>
            <PendingRoundedIcon color="white" size="large" />
          </Box>

          {eventListener ? <Box></Box> : <SearchBar />}
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
            <Box>
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
        </Toolbar>
      </AppBar>
      {/* modal */}
    </>
  );
}
