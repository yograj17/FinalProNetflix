import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    screeningData: {},
    nowPlyingData: {},
    populatData: {},
    topratedData: {},
    upcommingData: {},
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
    AddUpcommingData: (state, action) => {
      state.upcommingData = action.payload;
    },
  },
});

export const {
  AddScreeningData,
  AddNowPlayingData,
  AddPopularData,
  AddTopratedData,
  AddUpcommingData,
} = moviesSlice.actions;

export default moviesSlice.reducer;
