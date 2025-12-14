import { FaCirclePlay } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";

import GlobalApi from "../../services/GlobalApi";

const CarouselItem = ({ movie, genres }) => {
  const { backdrop_path, media_type, genre_ids } = movie;

  // its only genres form ids
  const itemGenres = genres.filter((genre) => genre_ids.includes(genre.id));

  return (
    <div className=" h-100 w-full">
      <div
        className={`h-[600px] absolute inset-0 transition-transform transform `}
      >
        <img
          src={`${GlobalApi.IMAGE_BASE_URL}/${backdrop_path}`}
          className="w-full h-[600px] object-cover"
          alt=""
        />

        <div className="absolute bottom-0 left-0 w-full h-[308px] bg-linear-to-t from-[#0d0c0f] to-transparent" />

        <div className="absolute w-full bottom-0 z-20 h-80 flex justify-between px-[75px] items-end py-16">
          <div className="flex flex-col items-start gap-6">
            <div className="px-4 py-1 rounded-2xl bg-[#0D0C0F]">
              <p className="text-[12px] font-medium">
                {media_type === "movie" ? "movie" : "series"}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-[32px]">
                {media_type === "movie" ? movie.title : movie.name}
              </h2>

              <p className="text-[#9CA4AB] text-[14px] font-normal leading-[22px] tracking-[0.5%]">
                {media_type === "movie"
                  ? new Date(movie.release_date).getFullYear()
                  : new Date(movie.first_air_date).getFullYear()}{" "}
                {itemGenres.map((g) => (
                  <span key={g.id} className="pr-2">{`• ${g.name}`}</span>
                ))}
              </p>
            </div>
            <div className="flex gap-6">
              <button className="px-6 py-3 rounded-[10px] bg-[#00925D] flex items-center gap-2.5">
                <FaCirclePlay size={22} />
                <span className="font-bold text-[#F9F9F9]">Watch Now</span>
              </button>

              <button className="px-6 py-3 rounded-[10px] border border-white flex items-center gap-2.5">
                <CiBookmark size={22} />
                <span className="font-bold text-[#F9F9F9]">Add Watch List</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarouselItem;
