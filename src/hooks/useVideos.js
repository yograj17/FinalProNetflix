import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddallVideos } from "../redux/slices/videosSlice";

const useVideos = (id) => {
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

    Dispach(AddallVideos(response?.results || []));
  };

  useEffect(() => {
    DataFetch();
  }, [id]);
};

export default useVideos;
