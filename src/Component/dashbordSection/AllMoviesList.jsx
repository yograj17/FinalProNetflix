import React from "react";
import useScreening from "../../hooks/useScreening";
import { useSelector } from "react-redux";
import AllMoviesListCard from "./AllMoviesListCard";

const AllMoviesList = () => {
  useScreening(2);
  useScreening(3);
  const NowPlayingMoviesData = useSelector(
    (state) => state.moviesData.nowPlyingData
  );
  const PopularMovies = useSelector((state) => state.moviesData.populatData);
  // console.log(NowPlayingMoviesData);

  return (
    <div className="bg-black mt-24">
      <div className="p-28 flex flex-col gap-10">
        <div className="">
          <div className="text-2xl font-semibold mb-4">Now Plying Movies</div>

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

        <div className="">
          <div className="text-2xl font-semibold mb-4">Popular Movies</div>
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
        <div className="">
          <div className="text-2xl font-semibold mb-4">Top Rated Movies</div>
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
        <div className="">
          <div className="text-2xl font-semibold mb-4">Upcomming Movies</div>
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
      </div>
    </div>
  );
};

export default AllMoviesList;
