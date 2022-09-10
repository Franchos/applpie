import React from "react";
import { Outlet } from "react-router-dom";

import { BackNavbar } from "../components/BackNavbar";

export const BackDoor = () => {
  return (
    <>
      <BackNavbar />
      <Outlet />
    </>
  );
};
