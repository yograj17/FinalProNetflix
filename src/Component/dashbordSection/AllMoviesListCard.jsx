import React from "react";

const AllMoviesListCard = ({ info }) => {
  return (
    <div
      className="cursor-pointer bg-black h-72 w-52 inline-block mr-8 bg-cover bg-center opacity-90  hover:scale-90 transition-all rounded-xl"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${info?.poster_path})`,
      }}
    ></div>
  );
};

export default AllMoviesListCard;
