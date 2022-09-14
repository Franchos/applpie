import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#0F0C08", second: "#ffffff" },
    secondary: { main: "#35363a", second: "#242424", third: "#e0e1e1" },
    third: {
      main: "#ffffff",
    },
  },
  typography: {
    title: { fontSize: "h3", color: "#060606" },
    subtitle1: { fontSize: "h6", color: "#060606" },
    body1: { fontSize: "1rem", color: "#060606" },
  },
});

export default theme;
