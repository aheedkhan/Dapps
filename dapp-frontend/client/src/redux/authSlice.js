import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogout: true,
  },
  reducers: {
    logIn: (state, action) => {
      state.isLogout = false;
      state.user = action.payload;
    },
    logOut: (state) => {
      state.isLogout = true;
      state.user = null;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
