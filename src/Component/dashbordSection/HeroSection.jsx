import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import useMovies from "../../hooks/useMovies";
import { useDispatch, useSelector } from "react-redux";
import {
  AddMoviesInfo,
  AddMoviesVideo,
} from "../../redux/slices/moviesvideoSlice";
import useMoviesDataFetch from "../../hooks/useMoviesDataFetch";
import Shimmer from "../visitSection/Shimmer";
import {
  AddNowPlayingData,
  AddPopularData,
  AddTopratedData,
  AddTvShowmainData,
  AddupcomingData,
} from "../../redux/slices/moviesSlice";

const HeroSection = () => {
  const Dispach = useDispatch();
  useMoviesDataFetch("movie", "popular", AddPopularData, 1, true);
  useMoviesDataFetch("movie", "top_rated", AddTopratedData, 1, false);
  useMoviesDataFetch("movie", "now_playing", AddNowPlayingData, 2, false);
  useMoviesDataFetch("movie", "upcoming", AddupcomingData, 1, false);
  useMoviesDataFetch("tv", "top_rated", AddTvShowmainData, 1, false);

  const screenigData = useSelector((state) => state.moviesData.screeningData);

  const TrailerVideos = useSelector((state) => state.moviesVideo.moviesVideo);
  const MoviesInfo = useSelector((state) => state.moviesVideo.moviesInfo);

  const [MovieId, setMovieId] = useState(402431);
  const [shimmer, setShimmer] = useState(false);

  useEffect(() => {
    if (screenigData?.results?.length > 0) {
      setMovieId(screenigData.results[0].id);
      Dispach(AddMoviesInfo(screenigData?.results[0]));
    }
    setShimmer(true);
  }, [screenigData?.results, shimmer]);

  useMovies(MovieId, AddMoviesVideo);

  return shimmer ? (
    <div className="h-80 relative">
      <Navbar />
      <div className="h-full w-full relative">
        <div className="absolute inset-0 z-0">
          {TrailerVideos ? (
            <iframe
              className="h-full w-full bg-gray-950 border"
              src={`https://www.youtube.com/embed/${TrailerVideos}?autoplay=1&mute=1&si=8nX64edJ7WcNUREv`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          ) : (
            <div className="h-full w-full z-40 flex justify-center items-center text-5xl font-bold">
              Trailer Not Available
            </div>
          )}
        </div>

        <div className="absolute inset-0 z-10 flex justify-center items-center bg-transparent">
          <div className="bg-gray-950 text-white h-full w-full bg-opacity-40 flex  relative">
            <div className="flex flex-col gap-1 opacity-90 absolute bottom-0 bg-gradient-to-t from-gray-950 via-gray-950 p-4">
              <div className="text-2xl font-extrabold">
                {MoviesInfo?.original_title}
              </div>
              <div className="h-12 overflow-hidden">{MoviesInfo?.overview}</div>
              <div className=" flex gap-2">
                <div className="border cursor-pointer h-8 w-20 flex justify-center items-center font-bold rounded-md bg-white text-black">
                  Play
                </div>
                <div className="border cursor-pointer h-8 w-20 flex justify-center items-center font-bold rounded-md">
                  Info
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="z-10 absolute -bottom-60 w-full h-60 py-2 px-4 flex flex-col gap-2">
        <div className=" font-semibold text-xl">Explore New Movies</div>
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
                className="border cursor-pointer bg-slate-500 h-44 w-32 inline-block mr-4 bg-cover bg-center opacity-90 rounded-xl"
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
  ) : (
    <Shimmer />
  );
};

export default HeroSection;
