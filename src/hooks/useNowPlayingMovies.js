import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  AddNowPlayingData,
  AddScreeningData,
} from "../redux/slices/moviesSlice";

const useNowPlayingMovies = (page) => {
  const Dispach = useDispatch();
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
    Dispach(AddScreeningData(response));
    Dispach(AddNowPlayingData(response));
  };
  useEffect(() => {
    movieData();
  }, []);
};

export default useNowPlayingMovies;
