import React, { useContext, useEffect, useRef, useState } from "react";

import GlobalApi from "../services/GlobalApi";
import { GenresContext } from "../context/GenresContext";
import { TrailerContext } from "../context/TrailerContext";

const TrailerVideo = () => {
  const { trailerState, closeTrailer } = useContext(TrailerContext);
  const { open, trailerId, trailerMediaType } = trailerState;
  const [videoObj, setVideoObj] = useState(null);
  const modelRef = useRef(null);

  useEffect(() => {
    if (trailerId && trailerMediaType && open) {
      const getVideo = async () => {
        try {
          const vidoe = await GlobalApi.getTrailerVideo(
            trailerId,
            trailerMediaType,
          );
          setVideoObj(vidoe.data);
        } catch (error) {
          console.log(error);
        }
      };
      getVideo();
    }
  }, [trailerId, trailerMediaType, open]);

  // Find trailer or fallback to first video
  const result =
    videoObj?.results?.find((item) => item.type.toLowerCase() === "trailer") ||
    videoObj?.results?.[0];

  useEffect(() => {
    // Handle click outside
    const handleClickOutside = (e) => {
      if (modelRef.current && !modelRef.current.contains(e.target)) {
        closeTrailer();
      }
    };

    //Handle escape key press
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        closeTrailer();
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [open, closeTrailer]);

  if (!open) return null;
  return (
    <div
      className={`fixed inset-0 z-100  bg-black/70 backdrop-blur-md flex justify-center items-center  `}
    >
      <div
        ref={modelRef}
        className="relative w-[90%] max-w-4xl bg-black rounded-xl shadow-2xl overflow-hidden "
      >
        <button
          onClick={closeTrailer}
          className="absolute top-4 right-4 z-10 cursor-pointer bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
          aria-label="Close trailer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="relative pt-[56.25%]">
          {result?.key ? (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${result.key}?autoplay=1`}
              title="Trailer video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white">
              No trailer available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrailerVideo;
