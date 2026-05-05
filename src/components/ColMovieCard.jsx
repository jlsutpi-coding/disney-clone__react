import { TiStarFullOutline } from "react-icons/ti";

import GlobalApi from "../services/GlobalApi.jsx";
import ImageUrl from "./ImageUrl.jsx";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromWatchlists } from "../redux/slices/watchlistSlice.js";

const ColMovieCard = ({ item, page = "" }) => {
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

  const dispatch = useDispatch();

  const onRemoveFromWatchlist = (deleteId) => {
    if (!deleteId) {
      return;
    }
    dispatch(removeFromWatchlists(deleteId));
  };

  return (
    <div className="relative shrink-0 h-[375px] group w-62  transition-all duration-300  rounded-xl overflow-hidden ">
      <ImageUrl imageUrl={imageUrl} template={"column"} alt={title} />
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
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onRemoveFromWatchlist(item.id);
        }}
        className={`${page === "watchlist" ? "absolute opacity-0 cursor-pointer group-hover:opacity-100 transition-all duration-300 " : "hidden"}   top-2 right-2  bg-gray-200/90 backdrop-blur-sm transition-transform hover:bg-gray-100 hover:scale-110 duration-200 hover:shadow-lg shadow-md    rounded-full z-100`}
      >
        <MdDeleteOutline className=" w-7 h-7 text-red-600 hover:text-red-700  p-1 " />
      </button>
    </div>
  );
};

export default ColMovieCard;
