import { createAction, createReducer } from "@reduxjs/toolkit";

export const setFav = createAction("SET_FAV");

export const favsReducer = createReducer([], {
  [setFav]: (state, action) => action.payload,
});
