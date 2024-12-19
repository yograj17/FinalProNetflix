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
    <div className=" bg-black text-white min-h-screen relative py-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between px-4">
          <div className="text-xl font-semibold">{type}</div>
          <div
            className="cursor-pointer flex justify-center items-center h-7 w-20 bg-red-500  rounded-md"
            onClick={() => {
              Naviget("/dashbord");
              Dispach(ClearMovies());
            }}
          >
            Back
          </div>
        </div>
        <div className=" flex flex-wrap justify-center items-center gap-2 m-auto ">
          {Data?.map((key, index) => (
            <div
              onClick={() => {
                AllVideosSee(key);
              }}
              className="rounded-xl h-40 w-28 bg-cover bg-center"
              key={index}
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${key.poster_path})`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 mt-2">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="border shimmer h-32 w-28 rounded-lg flex justify-center items-center gap-28"
            ref={index === 2 ? loadMoreRef : null}
          >
            <div className="shimmer-text w-20 h-4"></div>
          </div>
        ))}
      </div>

      {videoDiv ? (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-80"></div>
          <div
            className=" min-h-96 w-4/5 shadow-lg shadow-red-900 bg-black fixed overflow-y-auto py-20"
            style={{
              top: "59%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxHeight: "70vh",
              scrollbarWidth: "none",
            }}
          >
            <span
              className="absolute top-6 right-6 h-8 w-20 text-white bg-red-600  rounded-lg flex justify-center items-center text-md font-semibold cursor-pointer"
              onClick={() => {
                setvideoDiv(false);
              }}
            >
              Back
            </span>
            {/* <div className=""></div> */}
            <div className=" flex flex-col gap-2">
              {Videos?.map((key) => (
                <div
                  key={key.id}
                  className="border-b-2 pb-2  flex justify-between items-center mx-2"
                >
                  <div className="flex flex-col justify-center">
                    <div className="">{key.name}</div>
                    <div className="text-green-700">{key.type}</div>
                    <div className="">{key.published_at}</div>
                  </div>
                  <div className="flex justify-center items-center cursor-pointer">
                    <IoIosPlayCircle
                      className="h-10 w-10"
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
