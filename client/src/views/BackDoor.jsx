import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "../state/user";
import { BackNavbar } from "../components/BackNavbar";

export const BackDoor = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/auth/me").then(({ data }) => dispatch(setUser(data)));
  }, [dispatch]);

  return (
    <>
      <BackNavbar />
      <Outlet />
    </>
  );
};
