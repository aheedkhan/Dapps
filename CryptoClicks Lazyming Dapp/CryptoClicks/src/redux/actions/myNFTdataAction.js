import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDB } from "/src/utils/firebase";
export const fetchNFTsDB = createAsyncThunk(
  "fetchNFTsDB",
  async (Data, { rejectWithValue, dispatch }) => {
    try {
      const response = fetchDB();
      console.log("hello");
      console.log(response);
      return JSON.parse(response);
    } catch (error) {
      return rejectWithValue(error);
    } finally {
    }
  }
);
