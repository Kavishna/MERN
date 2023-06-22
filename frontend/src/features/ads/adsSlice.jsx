import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create an async thunk to fetch ads data
export const fetchAds = createAsyncThunk("ads/fetchAds", async () => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URI}/api/ads`);
  return response.data;
});

// Create the ads slice
const adsSlice = createSlice({
  name: "ads",
  initialState: {
    ads: [],
    filteredAds: [], // Add filtered ads array
    status: "idle",
    error: null,
  },
  reducers: {
    filterAds: (state, action) => {
      const searchQuery = action.payload.toLowerCase();

      state.filteredAds = state.ads.filter((ad) =>
        ad.title.toLowerCase().includes(searchQuery)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAds.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.ads = action.payload;
        state.filteredAds = action.payload; // Initialize filtered ads with all ads
      })
      .addCase(fetchAds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { filterAds } = adsSlice.actions;

export default adsSlice.reducer;
