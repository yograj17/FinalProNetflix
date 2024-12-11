import { useDispatch } from "react-redux";
import {
  AddNowPlayingData,
  AddPopularData,
  AddScreeningData,
} from "../redux/slices/moviesSlice";
import { useEffect } from "react";
import { AddMovies, AddVisitmovies } from "../redux/slices/visitMoviesSlice";

const useScreening = (page) => {
  const Dispach = useDispatch();
  AddNowPlayingData;
  const movieData = async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGI3MTRlZjJjMjUwYmQ5MTUwMzk3OWQzNTM1NzY2OCIsIm5iZiI6MTcyOTc0NjQ1MS4wNzYsInN1YiI6IjY3MTlkNjEzNWJlOWU4NzU5ZGE2ZGU0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wEsJSrnO8St4cDo9CAOzTGpQRJt00i4SW5Db7duUPUo",
      },
    };
    const data = await fetch(url, options);
    const response = await data.json();
    if (page == 1) {
      Dispach(AddScreeningData(response));
    } else if (page == 2) {
      Dispach(AddNowPlayingData(response));
    } else if (page == 3) {
      Dispach(AddPopularData(response));
    } else {
      Dispach(AddVisitmovies(response));
      Dispach(AddMovies(response));
    }
  };
  useEffect(() => {
    movieData();
  }, []);
};

export default useScreening;
