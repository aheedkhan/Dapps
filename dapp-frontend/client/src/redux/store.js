import { configureStore } from "@reduxjs/toolkit";
import authReducer from "/src/redux/authSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
