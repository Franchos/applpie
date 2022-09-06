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
import { ModalLogin } from "./modal";

export default function MenuAppBar() {
  //usar useSelector para fijarme si el usuario esta logueado
  const user = useSelector((state) => state.user);

  const [modal, setModal] = React.useState(false);

  return (
    <Box>
      <AppBar position="fixed" sx={{ width: "100vw", padding: 0, mr: 0 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            IDKWTW
          </Typography>

          {!user._id && (
            <>
              <Button
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setModal(true)}
                color="inherit"
              >
                Login
              </Button>
              <ModalLogin open={modal} onClose={setModal} />
            </>
          )}
          {user._id && ( //si auth es true recien se hace ese div
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
    </Box>
  );
}
