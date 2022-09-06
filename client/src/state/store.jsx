import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import { userReducer } from "./user";
import { moviesReducer } from "./movies";

export const store = configureStore({
  middleware: (mw) => mw().concat(logger),
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

// export default { store };
