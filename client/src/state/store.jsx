import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import { userReducer } from "./user";
import { moviesReducer } from "./movies";
import { favsReducer } from "./favs";

export const store = configureStore({
  middleware: (mw) => mw().concat(logger),
  reducer: {
    user: userReducer,
    // movies: moviesReducer,
    favs: favsReducer,
  },
});

// export default { store };
