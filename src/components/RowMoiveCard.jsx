import { useContext } from "react";

import { TiStarFullOutline } from "react-icons/ti";
import GlobalApi from "../services/GlobalApi";
import { GenresContext } from "../context/GenresContext";
import ImageUrl from "./ImageUrl";

const RowMovieCard = ({ item, media_type }) => {
  const { backdrop_path, title, genre_ids } = item;
  const { genres } = useContext(GenresContext);

  const genreList = genres?.[media_type];

  const detailGenres = genreList?.filter((genre) =>
    genre_ids.some((id) => id === genre.id),
  );
  const imageUrl = backdrop_path
    ? `${GlobalApi.IMAGE_BASE_URL}/${backdrop_path}`
    : "";

  return (
    <div className="max-w-[300px] rounded-lg overflow-hidden   transition-scale duration-300  shrink-0   ">
      <div className="  h-[183px]  mb-3 w-full">
        <ImageUrl template="row" imageUrl={imageUrl} alt={title} />
      </div>
      <h4 className=" font-bold text-[16px] mb-3 leading-6 tracking-[0.5%] text-[#f9f9f9]">
        {title?.length > 30 ? title.slice(0, 30) + "..." : title}
      </h4>
      <div className="flex gap-1 items-center">
        <TiStarFullOutline className=" text-yellow-500 w-[18px] h-[18px] " />
        <span className=" text-[12px] leading-5 font-semibold tracking-[0.5%] text-[#f9f9f9]">
          {item.vote_average.toFixed(1)}
        </span>
        <span className=" flex items-center gap-1">
          |{" "}
          {detailGenres?.slice(0, 2).map((item, index) => (
            <span
              className="text-[#78828A] text-[12px] font-medium leading-5 tracking-[0.5%]"
              key={index}
            >
              {index > 0 && ". "}
              {item.name}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default RowMovieCard;
