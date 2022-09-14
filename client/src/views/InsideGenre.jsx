import { Box } from "@mui/material";
import React from "react";
import { Outlet, useParams } from "react-router-dom";
import CategoryGrid from "../common/CategoryGrid";
import { NavbarInsideGenres } from "../components/NavbarInsideGenres";

export const InsideGenre = () => {
  const { category } = useParams();

  return (
    <>
      <NavbarInsideGenres category={category} />
      <CategoryGrid category={category} />
      <Outlet />
    </>
  );
};
