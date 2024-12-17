import { createSlice } from "@reduxjs/toolkit";

const moremoviesSlice = createSlice({
  name: "moreMovies",
  initialState: {
    moreMovies: [],
  },
  reducers: {
    AddMoreMovies: (state, action) => {
      state.moreMovies = [...state.moreMovies, ...action.payload?.results];
    },
    ClearMovies: (state) => {
      state.moreMovies = [];
    },
  },
});

export const { AddMoreMovies, ClearMovies } = moremoviesSlice.actions;
export default moremoviesSlice.reducer;
