import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Addtrailer,
  AddVisitmovies,
} from "../../redux/slices/visitMoviesSlice";
import useMovies from "../../hooks/useMovies";
import { AddMoviesVideo } from "../../redux/slices/moviesvideoSlice";

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

  const showTrailerHandler = (key) => {
    dispatch(Addtrailer(key));
    setIsModalVisible(true);
  };

  const Data = useSelector((state) => state.visitMovies.trailer);
  useMovies(Data.id, AddMoviesVideo);
  const trailer = useSelector((state) => state.moviesVideo.moviesVideo);

  const closeModalHandler = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="bg-black text-white  relative">
      {/* Dimmed background when modal is visible */}
      <div
        className={`py-7 px-32 flex flex-col gap-6 transition-opacity duration-300 ${
          isModalVisible ? "opacity-50 pointer-events-none" : "opacity-100"
        }`}
      >
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

        <div className="relative">
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
                onClick={() => showTrailerHandler(key)}
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
        </div>
      </div>

      {/* Modal */}
      {isModalVisible && (
        <>
          {/* Dimmed background */}
          <div
            className="fixed inset-0 bg-black bg-opacity-75 z-10"
            onClick={closeModalHandler}
          ></div>

          {/* Modal Content */}
          <div
            className="fixed z-20 h-[680px] w-[480px] bg-white flex items-center justify-center rounded-lg shadow-lg"
            style={{
              top: "50%",
              left: "30%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <button
              className="absolute top-8 -right-[680px] z-30 bg-red-500 text-white px-4 py-2 rounded font-semibold"
              onClick={closeModalHandler}
            >
              Close
            </button>
            <div className="text-black text-xl font-bold h-full w-full relative">
              <div className="h-full aspect-video absolute z-10 flex flex-col justify-between">
                <div className="h-32 bg-gradient-to-b from-black via-black"></div>
                <div className="h-32 bg-gradient-to-t from-black via-black"></div>
              </div>
              <iframe
                className="h-full border-2 aspect-video bg-gray-950 z-0 rounded"
                src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Movies;
