import { configureStore } from "@reduxjs/toolkit";
import authReducer from "/src/redux/authSlice";
import MyNFTsliceReducer from "/src/redux/myNFTdataSlice.js";
export default configureStore({
  reducer: {
    auth: authReducer,
    myNfts: MyNFTsliceReducer,
  },
});
