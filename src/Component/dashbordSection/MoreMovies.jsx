import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useMoviesDataFetch from "../../hooks/useMoviesDataFetch";
import { AddMoreMovies, ClearMovies } from "../../redux/slices/moreMoviesSlice";
import { useDispatch, useSelector } from "react-redux";
import useVideos from "../../hooks/useVideos";
import { IoIosPlayCircle } from "react-icons/io";
import PerticularClip from "./PerticularClip";
import { AddperticularVideo } from "../../redux/slices/videosSlice";

const MoreMovies = () => {
  const Dispach = useDispatch();
  const Naviget = useNavigate();
  const location = useLocation();
  const type = location?.state?.type;
  const allow = location?.state?.allow;

  const [Page, setPage] = useState(1);
  const [videoDiv, setvideoDiv] = useState(false);
  const [VideoID, setVideoID] = useState(null);
  const [VideoFild, setVideoFild] = useState(true);

  const loadMoreRef = useRef();

  useMoviesDataFetch("movie", type, AddMoreMovies, Page, allow);

  const AllVideosSee = (info) => {
    setvideoDiv(true);
    setVideoID(info.id);
  };

  const Data = useSelector((state) => state.moreMovies.moreMovies);
  const Videos = useSelector((state) => state.videos.allVideos);
  console.log(Videos);

  useVideos(VideoID || 1241982);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, []);

  return VideoFild ? (
    <div className="bg-black text-white min-h-screen relative">
      <div className="py-20">
        <div className="w-3/4 m-auto flex items-center justify-between px-28">
          <div className="text-4xl font-bold">{type}</div>
          <div
            className="cursor-pointer text-xl font-semibold w-32 h-12 flex justify-center items-center bg-red-500  rounded-lg"
            onClick={() => {
              Naviget("/dashbord");
              Dispach(ClearMovies());
            }}
          >
            Back
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 w-3/4 m-auto mt-10">
          {Data?.map((key, index) => (
            <div
              onClick={() => {
                AllVideosSee(key);
              }}
              className="rounded-xl w-60 h-80 bg-cover bg-center"
              key={index}
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${key.poster_path})`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className=" flex justify-center items-center py-6 gap-4">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="border shimmer h-48 w-52 rounded-lg flex justify-center items-center gap-28"
            ref={index === 4 ? loadMoreRef : null}
          >
            <div className="shimmer-text w-20 h-4"></div>
          </div>
        ))}
      </div>
      {videoDiv ? (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-80"></div>
          <div
            className="min-h-96 w-1/2 shadow-lg shadow-red-900 bg-black fixed overflow-y-auto py-20"
            style={{
              top: "59%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxHeight: "70vh",
              scrollbarWidth: "none",
            }}
          >
            <span
              className="absolute right-4 top-4 text-white bg-red-600 h-12 w-28 rounded-lg flex justify-center items-center text-lg font-semibold cursor-pointer"
              onClick={() => {
                setvideoDiv(false);
              }}
            >
              Back
            </span>
            <div className=""></div>
            <div className="mt-7 flex flex-col gap-8">
              {Videos?.map((key) => (
                <div
                  key={key.id}
                  className="border-b-2 h-28 flex justify-between items-center px-20 "
                >
                  <div className="h-28 flex flex-col justify-center text-lg font-semibold">
                    <div className="">{key.name}</div>
                    <div className="text-green-700">{key.type}</div>
                    <div className="">{key.published_at}</div>
                  </div>
                  <div className="flex justify-center items-center h-12 cursor-pointer">
                    <IoIosPlayCircle
                      className="h-14 w-14"
                      onClick={() => {
                        Dispach(AddperticularVideo(key.key));
                        setVideoFild(false);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        false
      )}
    </div>
  ) : (
    <PerticularClip setVideoFild={setVideoFild} />
  );
};

export default MoreMovies;