import { FaCirclePlay } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";

import GlobalApi from "../../services/GlobalApi";

const CarouselItem = ({ movie, genres }) => {
  const { backdrop_path, media_type, genre_ids = [], overview = "" } = movie;

  const itemGenres =
    Array.isArray(genres) &&
    genres.filter((genre) => genre_ids.includes(genre.id));

  if (!backdrop_path) {
    return null;
  }

  return (
    <div className="  w-full">
      <div
        className={` relative inset-0 overflow-hidden h-[500px] lg:h-[600px] transition-transform transform `}
      >
        <img
          src={`${GlobalApi.IMAGE_BASE_URL}/${backdrop_path}`}
          className="h-full w-full  object-cover"
          alt=""
        />

        <div className="absolute bottom-0 z-20 inset-x-0 w-full h-[308px] bg-linear-to-t from-[#0d0c0f] to-transparent" />

        <div className="absolute w-full inset-x-0 bottom-0  z-20 h-80 flex  lg:justify-between px-5 sm:px-[25px] md:px-[45px] lg:px-[75px] items-end lg:py-16  md:py-12 sm:py-4 py-4 ">
          <div className="flex flex-col items-start justify-end gap-4  lg:gap-6">
            <div className="px-2 lg:px-4 py-1 rounded-xl lg:rounded-2xl bg-[#0D0C0F]">
              <p className="text-[10px] lg:text-[12px] font-medium">
                {media_type === "movie" ? "movie" : "series"}
              </p>
            </div>

            <div className="flex flex-col gap-1 md:gap-2">
              <h2 className="font-bold  md:text-[24px] text-[20px] lg:text-[32px]">
                {media_type === "movie" ? movie.title : movie.name}
              </h2>

              <p className="text-[#9CA4AB] lg:text-[14px] text-[12px] font-normal leading-[22px] tracking-[0.5%]">
                {media_type === "movie"
                  ? new Date(movie.release_date).getFullYear()
                  : new Date(movie.first_air_date).getFullYear()}{" "}
                {itemGenres.map((g) => (
                  <span key={g.id} className="mr-2">
                    • {g.name}
                  </span>
                ))}
              </p>
              {overview.length > 0 && (
                <>
                  {" "}
                  <p className=" sm:hidden text-[#F9F9F9]  text-[14px] font-semibold leading-5  ">
                    {overview.length > 20
                      ? overview.slice(0, 90) + "..."
                      : overview}
                  </p>
                  <p className="sm:block hidden lg:text-[14px] max-w-[700px] font-semibold leading-5 text-[#F9F9F9]">
                    {overview.length > 350
                      ? overview.slice(0, 350) + "..."
                      : overview}
                  </p>
                </>
              )}
            </div>

            <div className="flex gap-3 mt-2 md:mt-0  items-center md:w-auto w-full lg:gap-6">
              <button className=" shrink md:w-auto md:px-6 md:shrink-0 py-2 w-full justify-center lg:py-3 rounded-[10px] bg-primary flex items-center gap-2 lg:gap-2.5">
                <FaCirclePlay className=" w-[15px] h-[15px] lg:w-[22px] lg:h-[22px]" />
                <span className=" font-semibold lg:font-bold  text-[#F9F9F9]">
                  Watch Now
                </span>
              </button>

              <button className="shrink md:w-auto md:px-6 md:shrink-0 w-full justify-center  py-2 lg:py-3 rounded-[10px] border border-white flex items-center gap-2.5">
                <CiBookmark className=" w-[15px] h-[15px] lg:w-[22px] lg:h-[22px]" />
                <span className=" font-semibold lg:font-bold text-[#F9F9F9]">
                  Add Watch List
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
