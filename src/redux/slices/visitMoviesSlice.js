import { createSlice } from "@reduxjs/toolkit";

const visitMoviesSlice = createSlice({
  name: "movies",
  initialState: {
    visitmovies: {},
    Movies: {},
    TvShow: {},
  },
  reducers: {
    AddVisitmovies: (state, action) => {
      state.visitmovies = action.payload;
    },
    AddMovies: (state, action) => {
      state.Movies = action.payload;
    },
    AddTvShow: (state, action) => {
      state.TvShow = action.payload;
    },
  },
});

export const { AddVisitmovies, AddMovies, AddTvShow } =
  visitMoviesSlice.actions;
export default visitMoviesSlice.reducer;
