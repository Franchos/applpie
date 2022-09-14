import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAction("REGISTER_USER");
export const setUser = createAction("SET_USER");
export const putUser = createAction("PUT_USER");
export const setFav = createAction("SET_FAV");
export const removeFav = createAction("REMOVE_FAV");
export const loginUser = createAction("LOGIN_USER");

export const userReducer = createReducer(
  {},
  {
    [setUser]: (state, action) => action.payload,
    [registerUser]: (state, action) => action.payload,
    [loginUser.fullfilled]: (state, action) => action.payload,
    [putUser]: (state, action) => action.payload, //contraseña y nombre hacer
    [setFav]: (state, action) => action.payload,
    [removeFav]: (state, action) => action.payload,
  }
);

// export default { setUser, userReducer };
