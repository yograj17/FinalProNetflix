import { createSlice } from "@reduxjs/toolkit";

const moviesvideoSlice = createSlice({
  name: "Trailer",
  initialState: {
    moviesVideo: {},
    moviesInfo: {},
  },
  reducers: {
    AddMoviesVideo: (state, action) => {
      state.moviesVideo = action.payload;
    },
    AddMoviesInfo: (state, action) => {
      state.moviesInfo = action.payload;
    },
  },
});

export const { AddMoviesVideo, AddMoviesInfo } = moviesvideoSlice.actions;
export default moviesvideoSlice.reducer;
