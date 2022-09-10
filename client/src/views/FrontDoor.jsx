import React from "react";
import { Outlet } from "react-router-dom";

import { HomeNavbar } from "../components/HomeNavbar";

export const WithoutNavBar = () => {
  return (
    <>
      <HomeNavbar />
      <Outlet />
    </>
  );
};
