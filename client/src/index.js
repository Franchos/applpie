import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/Home";
import { store } from "./state/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  // <ThemeProvider>
  <App />
  // </ThemeProvider>
  // </Provider>
);
