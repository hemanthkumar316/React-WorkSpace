import {  configureStore } from "@reduxjs/toolkit";
import userReducer from "./userdataSlice";

export default configureStore({
  reducer: userReducer,

});
