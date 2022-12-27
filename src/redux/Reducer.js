import { createReducer } from "@reduxjs/toolkit";

const userReducer = createReducer(
  {
    //initial state
    user: null,
  },
  {
    //reducer
    login: (state, action) => {
      state.user = { uid: action.payload.uid, email: action.payload.email };
    },
    logout: (state, action) => {
      state.user = action.payload;
    },
  }
);
export default userReducer;
