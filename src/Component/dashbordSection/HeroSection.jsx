import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import useScreening from "../../hooks/useScreening";
import useMovies from "../../hooks/useMovies";
import { useDispatch, useSelector } from "react-redux";
import { AddMoviesInfo } from "../../redux/slices/moviesvideoSlice";

const HeroSection = () => {
  const Dispach = useDispatch();
  useScreening(1);

  const screenigData = useSelector((state) => state.moviesData.screeningData);
  const TrailerVideos = useSelector((state) => state.moviesVideo.moviesVideo);
  const MoviesInfo = useSelector((state) => state.moviesVideo.moviesInfo);

  const [MovieId, setMovieId] = useState(402431);

  useEffect(() => {
    if (screenigData?.results?.length > 0) {
      setMovieId(screenigData.results[0].id);
      Dispach(AddMoviesInfo(screenigData?.results[0]));
    }
  }, [screenigData?.results]);

  useMovies(MovieId);

  return (
    <div className=" aspect-video relative">
      <Navbar />
      <div className="h-full w-full relative">
        <div className="absolute inset-0 z-0">
          <iframe
            className="h-full w-full bg-black"
            src={`https://www.youtube.com/embed/${TrailerVideos}?autoplay=1&mute=1&si=8nX64edJ7WcNUREv`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>

        <div className="absolute inset-0 z-10 flex justify-center items-center bg-transparent">
          <div className=" bg-black text-white h-full w-full bg-opacity-60 flex items-center pl-28">
            <div className=" h-60 w-1/2 flex flex-col gap-4 opacity-90">
              <div className="text-6xl font-bold">
                {MoviesInfo?.original_title}
              </div>
              <div className="text-lg">{MoviesInfo?.overview}</div>
              <div className=" flex gap-4">
                <div className="border cursor-pointer h-12 w-24 flex justify-center items-center text-xl font-bold rounded-xl">
                  Play
                </div>
                <div className="border cursor-pointer h-12 w-24 flex justify-center items-center text-xl font-bold rounded-xl">
                  Info
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="z-10 absolute -bottom-28 w-full h-86 px-28 pb-8  bg-gradient-to-t from-black via-black ">
        <div className="text-2xl font-semibold mb-4">Explore New Movies</div>
        <div
          className="h-full w-full whitespace-nowrap overflow-x-scroll scrollbar-hide "
          style={{
            scrollbarWidth: "none",
          }}
        >
          {screenigData.results?.map((key) => {
            return (
              <div
                key={key.id}
                className="cursor-pointer bg-lime-700 h-72 w-44 inline-block mr-12 bg-cover bg-center opacity-90 rounded-xl"
                onClick={() => {
                  setMovieId(key.id);
                  Dispach(AddMoviesInfo(key));
                }}
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500/${key?.poster_path})`,
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
