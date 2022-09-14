import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { FavsCarousel } from "../components/FavsCarousel";
import { setUser } from "../state/user";

export const UserProfile = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/auth/me").then(({ data }) => dispatch(setUser(data)));
  }, [dispatch]);

  return (
    <>
      <Box
        display="flex"
        marginTop="15vh"
        marginLeft="5.5vw"
        sx={{ justifyContent: "flex-start" }}
      >
        <Typography variant="h3" marginLeft="0vw">
          Hello {user.name} !!
        </Typography>
        {/* {!user.favorites ? (
          <Typography>Ups you don't have anything here</Typography>
        ) : (
          <FavsCarousel />
        )} */}
      </Box>
      <FavsCarousel />
      <Outlet />
    </>
  );
};
