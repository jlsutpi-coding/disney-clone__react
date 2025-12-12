import { FaCirclePlay } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { GoDownload, GoShareAndroid } from "react-icons/go";
import { AiOutlineLike } from "react-icons/ai";

import GlobalApi from "../../services/GlobalApi";

const Hero = ({ detail, media_type }) => {
  const title =
    media_type === "movie" ? detail.original_title : detail.original_name;

  const latest_release_date =
    media_type === "movie"
      ? new Date(detail.release_date).getFullYear()
      : new Date(detail.last_air_date).getFullYear();

  const converRuntime = (runtime) => {
    const hours = (runtime / 60).toFixed(0);
    const minutes = runtime % 60;
    return `${hours}h${minutes}m .`;
  };

  const runningTime = media_type === "movie" && converRuntime(detail.runtime);
  return (
    <div className=" relative w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={`${GlobalApi.IMAGE_BASE_URL}/${detail?.backdrop_path}`}
        className="w-full h-[600px] object-cover"
        alt=""
      />

      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-[648px] bg-[linear-gradient(358.93deg,#0D0C0F_0.83%,rgba(13,12,15,0.85)_28.55%,rgba(13,12,15,0)_48.81%,rgba(13,12,15,0.284314)_70.66%,#0D0C0F_103.18%)] " />

      {/* </div> */}
      <div className="absolute w-full bottom-0 z-20 h-80 flex justify-between px-[75px] items-end py-16">
        <div className=" flex flex-col items-start gap-6">
          {/* session info */}
          <div className="px-4 py-1 rounded-2xl bg-[#0D0C0F] ">
            <p className=" text-[12px] leading-5 tracking-[0.5%] font-medium">
              {media_type === "movie" ? "movie" : "series"}
            </p>
          </div>
          {/* title and description */}
          <div className="flex flex-col gap-2">
            <h2 className=" font-bold text-[32px] leading-10 tracking-[0.5%]">
              {title}
            </h2>
            <p className=" text-[#9CA4AB] text-[14px] leading-[22px] tracking-[0.5%] font-normal">
              {runningTime
                ? runningTime
                : `${detail.number_of_episodes} Episodes .`}{" "}
              {latest_release_date}{" "}
              {detail.genres.map((item) => {
                return (
                  <span className=" pr-2" key={item.id}>
                    {` . ${item.name}`}
                  </span>
                );
              })}
            </p>
          </div>

          <div className=" flex gap-6">
            <button className=" cursor-pointer px-6 py-3 rounded-[10px] flex items-center gap-2.5 bg-[#00925D] ">
              <FaCirclePlay size={22} />
              <span className="text-[14px] font-bold leading-[22px] tracking-[0.5%] text-[#F9F9F9]">
                Watch Now
              </span>
            </button>
            <button className=" cursor-pointer px-6 py-3 rounded-[10px] flex items-center gap-2.5 bg-transparent border border-white ">
              <CiBookmark size={22} />
              <span className="text-[14px] font-bold leading-[22px] tracking-[0.5%] text-[#F9F9F9]">
                Add Watch List
              </span>
            </button>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <button className=" cursor-pointer  bg-[#0D0C0F] px-6 py-3 flex items-center gap-2.5 rounded-[10px] border border-white  text-[#F9F9F9]">
            <GoDownload size={22} />
            <span className="text-[14px] font-bold leading-[22px] tracking-[0.5%]">
              Download
            </span>
          </button>
          <button className=" cursor-pointer  bg-[#0D0C0F] px-6 py-3 flex items-center gap-2.5 rounded-[10px] border border-white  text-[#F9F9F9]">
            <GoShareAndroid size={22} />
            <span className="text-[14px] font-bold leading-[22px] tracking-[0.5%]">
              Share
            </span>
          </button>
          <button className=" cursor-pointer  bg-[#0D0C0F] px-6 py-3 flex items-center gap-2.5 rounded-[10px] border border-white  text-[#F9F9F9]">
            <AiOutlineLike size={22} />
            <span className="text-[14px] font-bold leading-[22px] tracking-[0.5%]">
              Like
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
