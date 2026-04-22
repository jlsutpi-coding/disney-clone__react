import { useContext } from "react";

import { TiStarFullOutline } from "react-icons/ti";
import GlobalApi from "../services/GlobalApi";
import { GenresContext } from "../context/GenresContext";

const RowMovieCard = ({ item, media_type }) => {
  const genres = useContext(GenresContext);

  const genreList = genres?.[media_type];

  const detailGenres = genreList?.filter((genre) =>
    item.genre_ids.some((id) => id === genre.id),
  );

  return (
    <div className="w-[300px] hover:scale-105 transition-scale duration-300  shrink-0   no-scrollbar ">
      <img
        src={`${GlobalApi.IMAGE_BASE_URL}/${item.backdrop_path}`}
        alt={item.backdrop_path}
        className="  h-[183px] w-full  object-cover rounded-2xl mb-3 "
      />
      <h4 className=" font-bold text-[16px] mb-3 leading-6 tracking-[0.5%] text-[#f9f9f9]">
        {item.title?.length > 30 ? item.title.slice(0, 30) + "..." : item.title}
      </h4>
      <div className="flex gap-1 items-center">
        <TiStarFullOutline className=" text-yellow-500 w-[18px] h-[18px] " />
        <span className=" text-[12px] leading-5 font-semibold tracking-[0.5%] text-[#f9f9f9]">
          {item.vote_average.toFixed(1)}
        </span>
        <span className=" flex items-center gap-1">
          {detailGenres?.map((item, index) => {
            if (index === 0) {
              return (
                <span
                  className="text-[#78828A] text-[12px] font-medium leading-5 tracking-[0.5%]"
                  key={item.id}
                >
                  | {item.name}
                </span>
              );
            }
            if (index < 3) {
              return (
                <span
                  className="text-[#78828A] text-[12px] font-medium leading-5 tracking-[0.5%]"
                  key={item.id}
                >
                  . {item.name}
                </span>
              );
            }
          })}
        </span>
      </div>
    </div>
  );
};

export default RowMovieCard;
