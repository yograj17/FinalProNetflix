import React from "react";
import HeroSection from "./HeroSection";
import AllMoviesList from "./AllMoviesList";
import Footer from "../visitSection/Footer";

function Dashbord() {
  return (
    <div className="h-screen bg-black text-white">
      <HeroSection />
      {/* <AllMoviesList />
      <Footer /> */}
    </div>
  );
}

export default Dashbord;
