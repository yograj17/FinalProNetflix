import React from "react";
import { moviesData } from "../../utils/movies";

function Movies() {
  return (
    <div className="bg-black text-white py-7 px-32 flex flex-col gap-6">
      <div className="text-3xl font-semibold ">Trending Now</div>
      <div className="text-lg font-semibold flex gap-4">
        <select
          id="dropdown"
          name="options"
          className="h-10 w-36 block  px-2 border bg-white bg-opacity-10 text-white rounded-md "
        >
          <option value="option1" className="text-black">
            India
          </option>
          <option value="option2" className="text-black">
            Shirpur
          </option>
          <option value="option3" className="text-black">
            Vikharan
          </option>
        </select>
        <select
          id="dropdown"
          name="options"
          className="h-10 block w-36  px-2 border bg-white bg-opacity-10 text-white rounded-md "
        >
          <option value="option1" className="text-black">
            Movies
          </option>
          <option value="option2" className="text-black">
            Sci-Fi
          </option>
          <option value="option3" className="text-black">
            Horror
          </option>
        </select>
      </div>

      <div className="relative">
        <div
          className="whitespace-nowrap overflow-x-scroll scrollbar-hide"
          style={{
            scrollbarWidth: "none",
          }}
        >
          {moviesData.map((key, index) => (
            <span className="inline-block ml-4 mr-12  relative" key={index}>
              <img
                className="h-64 rounded-2xl hover:scale-95 transition duration-300 cursor-pointer"
                src={key.url}
                alt={`Movie ${index + 1}`}
              />
              <h1 className="absolute bottom-3 -left-4 text-6xl font-bold text-gray-100  bg-black rounded-3xl">
                {index + 1}
              </h1>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;
