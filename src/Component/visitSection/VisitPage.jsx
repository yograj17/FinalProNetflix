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
    <div className="no-scrollbar scroll-smooth">
      {/* Background Section */}
      <div
        style={{
          backgroundImage: `url(${BG_IMG_URL})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="h-screen"
      >
        <div className="h-full w-full bg-black bg-opacity-80 border">
          <Header logbut={logbut} />
          <div className="text-white h-4/5 flex justify-center items-center">
            <div className="border w-full sm:w-3/4 md:w-1/2 lg:w-1/3 px-5 sm:px-8">
              <div className="flex flex-col justify-center items-center text-3xl font-bold mb-4 sm:mb-6">
                <div>Unlimited movies,</div>
                <div>TV shows and more</div>
              </div>
              <div className="font-semibold flex justify-center items-center mb-6">
                <div>Starts at ₹149. Cancel at any time.</div>
              </div>
              <div className="flex flex-col px-8">
                <div className="mb-4">
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </div>
                <div className="flex justify-center items-center">
                  <Link to={"/login"}>
                    <div className="h-12 w-80 flex justify-center items-center text-xl font-semibold cursor-pointer rounded-lg bg-red-600">
                      Get Started
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Data Section */}
      <div>
        <Movies movies={moviesData} />
        <Options />
        <Question />
        <Footer />
      </div>
    </div>
  );
}

export default VisitPage;
