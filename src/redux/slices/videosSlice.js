import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    allVideos: {},
    perticularVideo: {},
  },
  reducers: {
    AddallVideos: (state, action) => {
      state.allVideos = action.payload;
    },
    RemoveVideos: (state, action) => {
      state.allVideos = {};
    },
    AddperticularVideo: (state, action) => {
      state.perticularVideo = action.payload;
    },
  },
});

export const { AddallVideos, RemoveVideos, AddperticularVideo } =
  videoSlice.actions;
export default videoSlice.reducer;
