import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaRegCircleStop } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
import { IoVolumeMute } from "react-icons/io5";
import { GoUnmute } from "react-icons/go";

const PerticularClip = ({ setVideoFild }) => {
  const key = useSelector((state) => state.videos.perticularVideo);
  const [PlayVideo, setPlayVideo] = useState(1);
  const [MuteVideo, setMuteVideo] = useState(0);

  return (
    <div className="h-screen w-screen bg-black text-white relative">
      <iframe
        className="w-full h-full bg-gray-950"
        src={`https://www.youtube.com/embed/${key}?autoplay=${PlayVideo}&mute=${MuteVideo}&si=8nX64edJ7WcNUREv`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div className="absolute  top-0 right-0 w-full h-28 bg-gradient-to-b from-black via-black"></div>
      <div className="absolute  bottom-0 right-0 w-full h-28 flex justify-center items-center  bg-gradient-to-t from-black via-black">
        <div className=" flex gap-20">
          {PlayVideo == 1 ? (
            <FaRegCircleStop
              className="h-10 w-10"
              onClick={() => {
                setPlayVideo(0);
              }}
            />
          ) : (
            <FaGooglePlay
              className="h-10 w-10"
              onClick={() => {
                setPlayVideo(1);
              }}
            />
          )}
          {MuteVideo == 0 ? (
            <GoUnmute
              className="h-10 w-10"
              onClick={() => {
                setMuteVideo(1);
              }}
            />
          ) : (
            <IoVolumeMute
              className="h-10 w-10"
              onClick={() => {
                setMuteVideo(0);
              }}
            />
          )}
        </div>
      </div>
      <div
        className="cursor-pointer absolute top-8 right-8 h-8 w-20 rounded-md flex justify-center items-center font-semibold text-md bg-red-600"
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
