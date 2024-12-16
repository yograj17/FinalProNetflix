import React from "react";
import Navbar from "../dashbordSection/Navbar";
import "./Shimmer.css";

const HeroSectionShimmer = () => {
  return (
    <div className="aspect-video relative bg-gray-900">
      <Navbar />
      {/* Video Background Shimmer */}
      <div className="absolute inset-0 z-0 shimmer bg-gray-800 rounded-lg"></div>

      {/* Overlay Shimmer Content */}
      <div className="absolute inset-0 z-10 flex justify-center items-center bg-transparent">
        <div className="bg-gray-950 text-white h-full w-full bg-opacity-70 flex pt-48 pl-32">
          <div className="flex flex-col gap-6">
            {/* Title Placeholder */}
            <div className="h-10 w-3/4 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 shimmer rounded-lg"></div>
            {/* Overview Placeholder */}
            <div className="h-6 w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 shimmer rounded-lg"></div>
            <div className="h-6 w-5/6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 shimmer rounded-lg"></div>
            {/* Buttons */}
            <div className="flex gap-4">
              <div className="h-12 w-32 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 shimmer rounded-full"></div>
              <div className="h-12 w-32 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 shimmer rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="z-10 absolute -bottom-28 w-full h-96 px-20 pb-10 bg-gradient-to-t from-gray-950 via-gray-900 to-transparent">
        <div className="h-8 w-1/4 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 shimmer rounded-lg mb-6"></div>
        {/* Carousel Items */}
        <div className="flex gap-6 overflow-x-scroll scrollbar-hide">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-72 w-48 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-700 shimmer rounded-lg"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSectionShimmer;
