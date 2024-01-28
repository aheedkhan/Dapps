import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogout: true,
  },
  reducers: {
    logIn: (state, action) => {
      state.isLogout = false;
      // localStorage.setItem("loggedIn", true);
      state.user = action.payload;
    },
    logOut: (state) => {
      state.isLogout = true;
      // localStorage.setItem("loggedIn", false);
      state.user = null;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
