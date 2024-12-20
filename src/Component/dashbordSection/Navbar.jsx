import React from "react";
import { LOGO_URL } from "../../utils/images";
import { removeUser } from "../../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { AddScreeningData } from "../../redux/slices/moviesSlice";

const Navbar = () => {
  const Dispach = useDispatch();

  const NowPlayingMoviesData = useSelector(
    (state) => state.moviesData.nowPlyingData
  );
  const PopularMovies = useSelector((state) => state.moviesData.populatData);
  const UpcomingData = useSelector((state) => state.moviesData.upcomingData);
  const TopRatedData = useSelector((state) => state.moviesData.topratedData);
  const TvShowmainData = useSelector((state) => state.moviesData.TvShowmain);
  return (
    <div className=" h-28 w-full absolute bg-gradient-to-b from-gray-950 via-gray-950 z-20 flex justify-between items-center px-6 ">
      <div className="h-12  flex gap-12">
        <img src={LOGO_URL} className="h-full w-full cursor-pointer" />
        {/* <div className="flex justify-center items-center gap-12 text-xl font-semibold cursor-pointer">
          <div
            onClick={() => {
              Dispach(AddScreeningData(NowPlayingMoviesData));
            }}
            className="hover:underline"
          >
            NowPlaying
          </div>
          <div
            onClick={() => {
              Dispach(AddScreeningData(PopularMovies));
            }}
            className="hover:underline"
          >
            Popular
          </div>
          <div
            onClick={() => {
              Dispach(AddScreeningData(TopRatedData));
            }}
            className="hover:underline"
          >
            TopRated
          </div>
          <div
            onClick={() => {
              Dispach(AddScreeningData(UpcomingData));
            }}
            className="hover:underline"
          >
            Upcoming
          </div>
          <div
            onClick={() => {
              Dispach(AddScreeningData(TvShowmainData));
            }}
            className="hover:underline"
          >
            TvShow
          </div>
        </div> */}
      </div>
      <div
        className=" cursor-pointer bg-red-600 font-semibold h-8 w-20 rounded-md text-sm flex justify-center items-center"
        onClick={() => {
          Dispach(removeUser(false));
        }}
      >
        Log Out
      </div>
    </div>
  );
};

export default Navbar;
