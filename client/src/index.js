import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App";
import { store } from "./state/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import theme from "./config/theme";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
