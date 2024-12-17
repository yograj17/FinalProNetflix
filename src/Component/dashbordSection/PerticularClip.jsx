import React from "react";
import { useSelector } from "react-redux";

const PerticularClip = ({ setVideoFild }) => {
  const key = useSelector((state) => state.videos.perticularVideo);
  return (
    <div className="h-screen bg-black text-white relative">
      <div className=" h-screen overflow-hidden relative">
        <iframe
          className="w-full aspect-video bg-gray-950 "
          src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&si=8nX64edJ7WcNUREv`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <div className="h-full w-full absolute  top-0  flex flex-col justify-between">
          <div className="bg-gradient-to-b from-gray-950 via-gray-950  h-24"></div>
          <div className="bg-gradient-to-t from-gray-950 via-gray-950  h-24"></div>
        </div>
      </div>
      <div
        className="cursor-pointer absolute top-10 right-16 h-12 w-28 rounded-lg flex justify-center items-center font-semibold text-lg bg-red-600"
        onClick={() => {
          setVideoFild(true);
        }}
      >
        Back
      </div>
    </div>
  );
};

export default PerticularClip;
