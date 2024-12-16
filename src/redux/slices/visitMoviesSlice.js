import { createSlice } from "@reduxjs/toolkit";

const visitMoviesSlice = createSlice({
  name: "movies",
  initialState: {
    visitmovies: {},
    Movies: {},
    TvShow: {},
    trailer: {},
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
    Addtrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { AddVisitmovies, AddMovies, AddTvShow, Addtrailer } =
  visitMoviesSlice.actions;
export default visitMoviesSlice.reducer;
