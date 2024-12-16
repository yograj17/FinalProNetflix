import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddVisitmovies } from "../../redux/slices/visitMoviesSlice";

function Movies({ movies }) {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const moviesData = useSelector((state) => state.visitMovies.Movies);
  const TvShowData = useSelector((state) => state.visitMovies.TvShow);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "option1") {
      dispatch(AddVisitmovies(moviesData));
    } else if (selectedValue === "option2") {
      dispatch(AddVisitmovies(TvShowData));
    }
  };

  const showTrailerHandler = () => {
    setIsModalVisible(true);
  };

  const closeModalHandler = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="bg-black text-white py-7  px-32 flex flex-col gap-6">
      <div className="text-3xl font-semibold">Trending Now</div>
      <div className="text-lg font-semibold flex gap-4">
        <select
          id="dropdown"
          name="options"
          className="h-10 w-36 block px-2 border bg-white bg-opacity-10 text-white rounded-md"
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
          className="h-10 block w-36 px-2 border bg-white bg-opacity-10 text-white rounded-md"
          onChange={handleSelectChange}
        >
          <option value="option1" className="text-black">
            Movies
          </option>
          <option value="option2" className="text-black">
            TV Show
          </option>
        </select>
      </div>

      <div className="relative border">
        <div
          className="whitespace-nowrap overflow-x-scroll scrollbar-hide"
          style={{
            scrollbarWidth: "none",
          }}
        >
          {movies?.results?.map((key, index) => (
            <span
              className="inline-block ml-4 mr-12 relative"
              key={index}
              onClick={showTrailerHandler}
            >
              <img
                className="h-64 rounded-2xl hover:scale-95 transition duration-300 cursor-pointer"
                src={`https://image.tmdb.org/t/p/original/${key.poster_path}`}
                alt={`Movie ${index + 1}`}
              />
              <h1 className="absolute bottom-3 -left-4 text-6xl font-bold text-gray-100 bg-black rounded-3xl">
                {index + 1}
              </h1>
            </span>
          ))}
        </div>

        {/* Centered modal */}

        {isModalVisible && (
          <div
            className="h-[480px] w-[480px] bg-white absolute flex items-center justify-center"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded"
              onClick={closeModalHandler}
            >
              Close
            </button>
            <p className="text-black text-xl font-bold">Trailer is playing!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Movies;
