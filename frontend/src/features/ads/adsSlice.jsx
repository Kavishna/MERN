// adsSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create an async thunk to fetch ads data
export const fetchAds = createAsyncThunk("ads/fetchAds", async () => {
  const response = await axios.get("http://localhost:3000/api/ads");
  return response.data;
});

// Create the ads slice
const adsSlice = createSlice({
  name: "ads",
  initialState: {
    ads: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAds.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.ads = action.payload;
      })
      .addCase(fetchAds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default adsSlice.reducer;
