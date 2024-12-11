import React from "react";

const AllMoviesListCard = ({ info }) => {
  return (
    <div
      className="cursor-pointer bg-lime-700 h-72 w-44 inline-block mr-12 bg-cover bg-center opacity-90 rounded-xl"
      onClick={() => {
        setMovieId(info.id);
        Dispach(AddMoviesInfo(info));
      }}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${info?.poster_path})`,
      }}
    ></div>
  );
};

export default AllMoviesListCard;
