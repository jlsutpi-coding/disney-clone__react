import { TiStarFullOutline } from "react-icons/ti";

import GlobalApi from "../services/GlobalApi.jsx";
import { useState } from "react";

const ColMovieCard = ({ item }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const { poster_path, title, name, vote_average } = item;
  const detailTitle = title
    ? title?.length > 22
      ? title.slice(0, 22) + "..."
      : title
    : name?.length > 22
      ? name.slice(0, 22) + "..."
      : name;

  const imageUrl = poster_path
    ? `${GlobalApi.IMAGE_BASE_URL}/${poster_path}`
    : "";

  return (
    <div className="relative shrink-0 h-[375px] w-62 hover:scale-105 transition-all duration-300  rounded-xl overflow-hidden ">
      <div className=" relative w-full h-full">
        {imageUrl && !imageError && imageLoading && (
          <div className=" animate-pulse inset-0 bg-[#1f1f1f] w-full h-full"></div>
        )}
        {imageUrl && !imageError ? (
          <img
            src={imageUrl}
            className=" absolute inset-0   w-full  h-full object-cover rounded-xl"
            onError={() => {
              setImageError(true);
              setImageLoading(false);
            }}
            onLoad={() => setImageLoading(false)}
          />
        ) : (
          <div className="w-full h-full absolute bg-[#1f1f1f] flex items-center justify-center text-gray-400 text-sm">
            No Image
          </div>
        )}
      </div>
      <div className="absolute z-10 bottom-0  left-0 rounded-lg pl-3 pb-3 bg-linear-to-t from-black to-transparent w-full  ">
        <h4 className=" font-bold text-[16px] mb-3 leading-6 tracking-[0.5%] text-[#f9f9f9]">
          {detailTitle}
        </h4>
        <div className="flex">
          <TiStarFullOutline className=" text-yellow-500 w-[18px] h-[18px] " />
          <span className=" text-[12px] leading-5 font-semibold tracking-[0.5%] text-[#f9f9f9]">
            {vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ColMovieCard;
