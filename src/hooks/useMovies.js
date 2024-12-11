import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddMoviesVideo } from "../redux/slices/moviesvideoSlice";

const useMovies = (id) => {
  const Dispach = useDispatch();
  const DataFetch = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGI3MTRlZjJjMjUwYmQ5MTUwMzk3OWQzNTM1NzY2OCIsIm5iZiI6MTcyOTc0NjQ1MS4wNzYsInN1YiI6IjY3MTlkNjEzNWJlOWU4NzU5ZGE2ZGU0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wEsJSrnO8St4cDo9CAOzTGpQRJt00i4SW5Db7duUPUo",
      },
    };
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;

    const data = await fetch(url, options);
    const response = await data.json();
    const Trailer = response?.results.filter((key) => key?.type === "Trailer");

    Dispach(AddMoviesVideo(Trailer[0]?.key));
  };

  useEffect(() => {
    DataFetch();
  }, [id]);
};

export default useMovies;
