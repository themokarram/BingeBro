import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducer";

const store = configureStore({
  reducer: {
    mainuser: userReducer,
  },
});
export default store;
