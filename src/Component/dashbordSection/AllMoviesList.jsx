import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AllMoviesListCard from "./AllMoviesListCard";
import { AddScreeningData } from "../../redux/slices/moviesSlice";
import { useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const AllMoviesList = () => {
  const Dispach = useDispatch();
  const Naviget = useNavigate();
  const NowPlayingMoviesData = useSelector(
    (state) => state.moviesData.nowPlyingData
  );
  const PopularMovies = useSelector((state) => state.moviesData.populatData);
  const UpcomingData = useSelector((state) => state.moviesData.upcomingData);
  const TopRatedData = useSelector((state) => state.moviesData.topratedData);
  const TvShowmainData = useSelector((state) => state.moviesData.TvShowmain);

  return (
    <div className="bg-gray-950 mt-24">
      <div className="p-28 flex flex-col gap-10">
        <div
          className="shadow-lg shadow-stone-800 p-6"
          onClick={() => {
            Dispach(AddScreeningData(NowPlayingMoviesData));
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <div className=" text-2xl font-bold mb-8 gap-2 flex justify-between">
            Now Playing Movies
            <span
              className=""
              onClick={() => {
                Naviget("/moreMovies", {
                  state: { type: "now_playing", allow: true },
                });
              }}
            >
              <FaRegArrowAltCircleRight className="h-10 w-10 cursor-pointer" />
            </span>
          </div>

          <div
            className="whitespace-nowrap overflow-x-scroll scrollbar-hide "
            style={{
              scrollbarWidth: "none",
            }}
          >
            {NowPlayingMoviesData.results?.map((key) => {
              return <AllMoviesListCard key={key.id} info={key} />;
            })}
          </div>
        </div>

        <div
          className="shadow-lg shadow-stone-800 p-6"
          onClick={() => {
            Dispach(AddScreeningData(PopularMovies));
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <div className=" text-2xl font-bold mb-8 gap-2 flex justify-between">
            Popular Movies
            <span
              className=""
              onClick={() => {
                Naviget("/moreMovies", {
                  state: { type: "popular", allow: true },
                });
              }}
            >
              <FaRegArrowAltCircleRight className="h-10 w-10 cursor-pointer" />
            </span>
          </div>
          <div
            className="whitespace-nowrap overflow-x-scroll scrollbar-hide "
            style={{
              scrollbarWidth: "none",
            }}
          >
            {PopularMovies.results?.map((key) => {
              return <AllMoviesListCard key={key.id} info={key} />;
            })}
          </div>
        </div>
        <div
          className="shadow-lg shadow-stone-800 p-6"
          onClick={() => {
            Dispach(AddScreeningData(TopRatedData));
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <div className=" text-2xl font-bold mb-8 gap-2 flex justify-between">
            Top Rated Movies
            <span
              className=""
              onClick={() => {
                Naviget("/moreMovies", {
                  state: { type: "top_rated", allow: true },
                });
              }}
            >
              <FaRegArrowAltCircleRight className="h-10 w-10 cursor-pointer" />
            </span>
          </div>
          <div
            className="whitespace-nowrap overflow-x-scroll scrollbar-hide "
            style={{
              scrollbarWidth: "none",
            }}
          >
            {TopRatedData.results?.map((key) => {
              return <AllMoviesListCard key={key.id} info={key} />;
            })}
          </div>
        </div>
        <div
          className="shadow-lg shadow-stone-800 p-6"
          onClick={() => {
            Dispach(AddScreeningData(UpcomingData));
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <div className=" text-2xl font-bold mb-8 gap-2  flex justify-between">
            Upcoming Movies
            <span
              className=""
              onClick={() => {
                Naviget("/moreMovies", {
                  state: { type: "upcoming", allow: true },
                });
              }}
            >
              <FaRegArrowAltCircleRight className="h-10 w-10 cursor-pointer" />
            </span>
          </div>
          <div
            className="whitespace-nowrap overflow-x-scroll scrollbar-hide "
            style={{
              scrollbarWidth: "none",
            }}
          >
            {UpcomingData.results?.map((key) => {
              return <AllMoviesListCard key={key.id} info={key} />;
            })}
          </div>
        </div>
        <div
          className="shadow-lg shadow-stone-800 p-6"
          onClick={() => {
            Dispach(AddScreeningData(TvShowmainData));
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <div className=" text-2xl font-bold mb-8 gap-2 flex justify-between">
            Tv Show Movies
            {/* <span className="border-2"></span> */}
          </div>
          <div
            className="whitespace-nowrap overflow-x-scroll scrollbar-hide "
            style={{
              scrollbarWidth: "none",
            }}
          >
            {TvShowmainData.results?.map((key) => {
              return <AllMoviesListCard key={key.id} info={key} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMoviesList;
