import { createAction, createReducer } from "@reduxjs/toolkit";

export const loginUser = createAction("LOGIN_USER");
export const getUser = createAction("GET_USER");

export const userReducer = createReducer(
  {},
  {
    [loginUser]: (state, action) => action.payload,
    [getUser]: (state, action) => action.payload,
  }
);

// export default { setUser, userReducer };
