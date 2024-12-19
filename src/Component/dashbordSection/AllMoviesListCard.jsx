import React from "react";

const AllMoviesListCard = ({ info }) => {
  return (
    <div
      className="border border-gray-500 cursor-pointer bg-black h-44 w-32 inline-block mr-4 bg-cover bg-center opacity-90  hover:scale-90 transition-all rounded-xl"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${info?.poster_path})`,
      }}
    ></div>
  );
};

export default AllMoviesListCard;
