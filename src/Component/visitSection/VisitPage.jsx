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
            <div className="h-4/5 w-2/5  flex flex-col justify-center items-center gap-6">
              <div className="text-6xl font-bold flex flex-col justify-center items-center">
                <div>Unlimited movies,</div>
                <div>TV shows and more</div>
              </div>
              <div className="text-lg font-semibold">
                <div>Starts at ₹149. Cancel at any time.</div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-lg">
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
