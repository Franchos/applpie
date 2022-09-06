import { createAction, createReducer } from "@reduxjs/toolkit";

export const getMovies = createAction("GET_MOVIES");

export const moviesReducer = createReducer([], {
  [getMovies]: (state, action) => action.payload,
});
