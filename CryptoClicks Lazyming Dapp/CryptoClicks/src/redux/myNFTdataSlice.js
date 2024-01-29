// MyNFTdataSlice.js

// Import the Redux Toolkit and Firebase modules
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Create an async thunk action that fetches the data from Firestore
export const fetchFromDB = createAsyncThunk("myNfts/fetchFromDB", (data) => {
  // Return the data array as the payload
  return data;
});

// Create the slice with the initial state and the extra reducer
export const MyNFTslice = createSlice({
  name: "myNfts",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    // Add a case for the fulfilled action of the async thunk
    builder.addCase(fetchFromDB.fulfilled, (state, action) => {
      // Replace the state with the action payload
      return [...action.payload];
    });
  },
});

// Export the slice reducer
export default MyNFTslice.reducer;
