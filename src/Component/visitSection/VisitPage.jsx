import React, { useState } from "react";
import { BG_IMG_URL } from "../../utils/images";
import Header from "../Header";
import Movies from "./Movies";
import Options from "./Options";
import Question from "./Question";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useMoviesDataFetch from "../../hooks/useMoviesDataFetch";
import {
  AddMovies,
  AddTvShow,
  AddVisitmovies,
} from "../../redux/slices/visitMoviesSlice";

function VisitPage() {
  useMoviesDataFetch("movie", "now_playing", AddMovies, 2, false);
  useMoviesDataFetch("movie", "now_playing", AddVisitmovies, 2, false);
  useMoviesDataFetch("tv", "top_rated", AddTvShow, 1, false);

  const moviesData = useSelector((state) => state.visitMovies.visitmovies);

  const [logbut, setlogbut] = useState(true);
  return (
    <div className="no-scrollbar scroll-smooth bg-black ">
      <div
        style={{
          backgroundImage: `url(${BG_IMG_URL})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="h-screen"
      >
        <div className="h-full w-full bg-black bg-opacity-80">
          <Header logbut={logbut} />
          <div className="text-white h-4/5 flex justify-center items-center">
            <div className=" flex flex-col gap-4">
              <div className=" flex flex-col justify-center items-center text-4xl font-bold">
                <div className="">Unlimited movies,</div>
                <div className="">TV shows and more</div>
              </div>
              <div className=" font-semibold flex justify-center items-center">
                <div className="">Starts at ₹149. Cancel at any time.</div>
              </div>
              <div className=" flex flex-col justify-center items-center px-10 gap-12">
                <div className="">
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </div>
                <div className="flex justify-center items-center">
                  <Link to={"/login"}>
                    <div className="h-12 w-44 flex justify-center items-center text-lg font-semibold cursor-pointer rounded-lg bg-red-600">
                      Get Started
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Movies movies={moviesData} />
        <Options />
        {/*<Question />
        <Footer /> */}
      </div>
    </div>
  );
}

export default VisitPage;
