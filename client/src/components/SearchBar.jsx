import * as React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const SearchBar = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "25px",
    backgroundColor: "#2b2620",
    "&:hover": {
      backgroundColor: "#3c3832",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "40ch",
        },
      },
    },
  }));

  return (
    <Search>
      <SearchIconWrapper>
        <VisibilityIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search here"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};
