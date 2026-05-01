import { useContext, useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";

import { FaCirclePlay } from "react-icons/fa6";
import { GoDownload, GoShareAndroid } from "react-icons/go";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

import GlobalApi from "../../services/GlobalApi";

import {
  addToLikes,
  removeFromLikes,
  selectIsInLikedItems,
} from "../../redux/slices/likeSlice";

import BtnPrimary from "../../components/BtnPrimary";
import BtnOutline from "../../components/BtnOutline";
import { TrailerContext } from "../../context/TrailerContext";
import ImageUrl from "../../components/ImageUrl";
import HeroBtnGroup from "../../components/HeroBtnGroup";

const Hero = ({ detail, media_type }) => {
  const title = media_type === "movie" ? detail.title : detail.name;

  const dispatch = useDispatch();

  const { openTrailer } = useContext(TrailerContext);

  const latest_release_date = useMemo(() => {
    if (!detail) return "";
    return media_type === "movie"
      ? new Date(detail.release_date).getFullYear()
      : new Date(detail.last_air_date).getFullYear();
  }, [detail, media_type]);

  const converRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h${minutes}m • `;
  };

  const runningTime = media_type === "movie" && converRuntime(detail.runtime);

  const imageUrl = detail?.backdrop_path
    ? `${GlobalApi.IMAGE_BASE_URL}/${detail.backdrop_path}`
    : "";

  const isLiked = useSelector((state) =>
    selectIsInLikedItems(state, detail.id),
  );

  const onAddToLike = () => {
    if (isLiked) {
      dispatch(removeFromLikes(detail.id));
    } else {
      dispatch(addToLikes(detail));
    }
  };

  return (
    <div className=" relative w-full overflow-hidden h-[480px] sm:h-[550px] lg:h-[600px]">
      <ImageUrl
        imageUrl={imageUrl}
        template={"hero"}
        alt={detail?.backdrop_path}
      />

      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-[480px] sm:h-[550px] lg:h-[600px] bg-[linear-gradient(358.93deg,#0D0C0F_0.83%,rgba(13,12,15,0.85)_28.55%,rgba(13,12,15,0)_48.81%,rgba(13,12,15,0.284314)_70.66%,#0D0C0F_103.18%)] " />

      {/* Btn */}
      <div
        className="absolute w-full bottom-0 z-20  flex-col flex sm:flex-row gap-3 sm:gap-3
          justify-between px-5  md:px-[45px] lg:px-[75px] items-start sm:items-end   md:py-14 py-10 lg:py-16"
      >
        {/* detail section */}
        <div className=" shrink  w-full flex flex-col items-start gap-3 md:gap-4 lg:gap-6">
          {/* session info */}

          <div className="px-2 lg:px-4 py-1 rounded-xl lg:rounded-2xl bg-[#0D0C0F]">
            <p className="text-[10px] lg:text-[12px] font-medium">
              {media_type === "movie" ? "movie" : "series"}
            </p>
          </div>
          {/* title and description */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold  text-[24px]  lg:text-[32px]">{title}</h2>
            <p className=" text-[#9CA4AB] lg:text-[14px] text-[12px] font-normal leading-[22px] tracking-[0.5%]">
              {runningTime
                ? runningTime
                : `${detail.number_of_episodes} Episodes •`}{" "}
              {latest_release_date}{" "}
              {detail?.genres?.map((item) => {
                return (
                  <span className=" pr-2 " key={item.id}>
                    • {`   ${item.name}`}
                  </span>
                );
              })}
            </p>
          </div>
          {/* Btn section */}
          <div className="hidden sm:flex gap-4  lg:gap-6">
            <HeroBtnGroup item={detail} />
          </div>
        </div>
        {/* Btn groups */}
        <div className="flex  gap-3 lg:gap-6 w-full sm:w-auto items-center">
          <BtnPrimary
            onClickFunction={() => openTrailer(detail.id, media_type)}
            hidden={true}
          >
            <FaCirclePlay className=" w-[15px] h-[15px] lg:w-[22px] lg:h-[22px]" />
            <span className=" font-semibold lg:font-bold  text-[#F9F9F9]">
              Watch Now
            </span>
          </BtnPrimary>

          <BtnOutline page={"detail"}>
            <GoDownload className=" h-5 w-5 lg:w-[22px]" />
            <span className=" lg:inline-block hidden text-[14px] font-bold leading-[22px] tracking-[0.5%]">
              Download
            </span>
          </BtnOutline>

          <BtnOutline page={"detail"}>
            <GoShareAndroid className=" h-5 w-5 lg:w-[22px]" />
            <span className="text-[14px]  lg:inline-block hidden font-bold leading-[22px] tracking-[0.5%]">
              Share
            </span>
          </BtnOutline>

          <BtnOutline
            isActive={isLiked}
            onClickFunction={onAddToLike}
            page={"detail"}
          >
            {isLiked ? (
              <AiFillLike className=" h-5 w-5 lg:w-[22px]" />
            ) : (
              <AiOutlineLike className=" h-5 w-5 lg:w-[22px]" />
            )}

            <span className="text-[14px] lg:inline-block hidden font-bold leading-[22px] tracking-[0.5%]">
              {isLiked ? "Liked" : "Like"}
            </span>
          </BtnOutline>
        </div>
      </div>
    </div>
  );
};

export default Hero;
