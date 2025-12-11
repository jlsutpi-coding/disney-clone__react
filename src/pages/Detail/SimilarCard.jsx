import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { TiStarFullOutline } from "react-icons/ti";

import GlobalApi from "../../services/GlobalApi";

const SimilarCard = ({ item, media_type }) => {
  const [genres, setGenre] = useState();

  useEffect(() => {
    const fetchGenre = async () => {
      const response = await GlobalApi.getGenres(media_type);
      setGenre(response.data.genres);
    };
    fetchGenre();
  }, [media_type]);

  const detailGenres = genres?.filter((genre) =>
    item.genre_ids.some((id) => id === genre.id)
  );

  return (
    <div className=" shrink-0 no-scrollbar ">
      <Link to={`/${media_type}/${item.id}`}>
        {" "}
        <img
          src={`${GlobalApi.IMAGE_BASE_URL}/${item.backdrop_path}`}
          alt=""
          className="w-70 h-[183px] object-cover rounded-2xl mb-3 "
        />
      </Link>

      <h4 className=" font-bold text-[16px] mb-3 leading-6 tracking-[0.5%] text-[#f9f9f9]">
        {item.title?.length > 30 ? item.title.slice(0, 30) + "..." : item.title}
      </h4>

      <div className="flex gap-1 items-center">
        <TiStarFullOutline className=" text-yellow-500 w-[18px] h-[18px] " />
        <span className=" text-[12px] leading-5 font-semibold tracking-[0.5%] text-[#f9f9f9]">
          {item.vote_average.toFixed(1)}
        </span>
        <span>
          |{" "}
          {detailGenres?.map((item, index) => {
            if (index === 0) {
              return <span key={item.id}>{item.name}</span>;
            }
            if (index > 2) {
              return <span key={item.id}>. {item.name}</span>;
            }
          })}
        </span>
      </div>
    </div>
  );
};

export default SimilarCard;
