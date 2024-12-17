import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import formTypeSlice from "./slices/formTypeSlice";
import moviesReducer from "./slices/moviesSlice";
import moviesVideoReducer from "./slices/moviesvideoSlice";
import visitmoviesReducer from "./slices/visitMoviesSlice";
import moreMoviesReducer from "./slices/moreMoviesSlice";
import videosReducer from "./slices/videosSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    form: formTypeSlice,
    moviesData: moviesReducer,
    moviesVideo: moviesVideoReducer,
    visitMovies: visitmoviesReducer,
    moreMovies: moreMoviesReducer,
    videos: videosReducer,
  },
});

export default store;
