import React from "react";
import { Outlet } from "react-router-dom";

import { MenuAppBar } from "../components/Navbar";

export const WithNavBar = () => {
  return (
    <>
      <MenuAppBar />
      <Outlet />
    </>
  );
};
