import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "../state/user";
import { HomeNavbar } from "../components/HomeNavbar";

export const WithoutNavBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/auth/me").then(({ data }) => dispatch(setUser(data)));
  }, [dispatch]);

  return (
    <>
      <HomeNavbar />
      <Outlet />
    </>
  );
};
