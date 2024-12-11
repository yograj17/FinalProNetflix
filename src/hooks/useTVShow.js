import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddTvShow } from "../redux/slices/visitMoviesSlice";

const useTVShow = () => {
  const Dispach = useDispatch();
  const MoiesData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGI3MTRlZjJjMjUwYmQ5MTUwMzk3OWQzNTM1NzY2OCIsIm5iZiI6MTcyOTc0NjQ1MS4wNzYsInN1YiI6IjY3MTlkNjEzNWJlOWU4NzU5ZGE2ZGU0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wEsJSrnO8St4cDo9CAOzTGpQRJt00i4SW5Db7duUPUo",
      },
    };

    const data = await fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    );
    const response = await data.json();
    Dispach(AddTvShow(response));
  };
  useEffect(() => {
    MoiesData();
  }, []);
};

export default useTVShow;
