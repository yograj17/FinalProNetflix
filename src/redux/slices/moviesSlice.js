import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    screeningData: {},
    nowPlyingData: {},
    populatData: {},
    TvShowmain: {},
    topratedData: {},
    upcomingData: {},
  },
  reducers: {
    AddScreeningData: (state, action) => {
      state.screeningData = action.payload;
    },
    AddNowPlayingData: (state, action) => {
      state.nowPlyingData = action.payload;
    },
    AddPopularData: (state, action) => {
      state.populatData = action.payload;
    },
    AddTopratedData: (state, action) => {
      state.topratedData = action.payload;
    },
    AddupcomingData: (state, action) => {
      state.upcomingData = action.payload;
    },
    AddTvShowmainData: (state, action) => {
      state.TvShowmain = action.payload;
    },
  },
});

export const {
  AddScreeningData,
  AddNowPlayingData,
  AddPopularData,
  AddTvShowmainData,
  AddTopratedData,
  AddupcomingData,
} = moviesSlice.actions;

export default moviesSlice.reducer;
