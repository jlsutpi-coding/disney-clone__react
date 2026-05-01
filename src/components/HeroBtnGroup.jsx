import React, { useContext } from "react";

import { useDispatch, useSelector } from "react-redux";

import { TrailerContext } from "../context/TrailerContext";

import {
  addToWatchlists,
  removeFromWatchlists,
  selectIsInWatchlist,
} from "../redux/slices/watchlistSlice";

import BtnPrimary from "./BtnPrimary";
import BtnOutline from "./BtnOutline";

import { GoBookmark, GoBookmarkFill } from "react-icons/go";
import { FaCirclePlay } from "react-icons/fa6";

const HeroBtnGroup = ({ item }) => {
  const dispatch = useDispatch();
  const { openTrailer } = useContext(TrailerContext);

  const isActive = useSelector((state) => selectIsInWatchlist(state, item.id));
  return (
    <>
      <BtnPrimary onClickFunction={() => openTrailer(item.id, item.media_type)}>
        <FaCirclePlay className=" w-[15px] h-[15px] lg:w-[22px] lg:h-[22px]" />
        <span className=" font-semibold lg:font-bold  text-[#F9F9F9]">
          Watch Now
        </span>
      </BtnPrimary>

      <BtnOutline
        isActive={isActive}
        onClickFunction={() => {
          if (isActive) {
            dispatch(removeFromWatchlists(item.id));
          } else {
            dispatch(addToWatchlists(item));
          }
        }}
      >
        {isActive ? <GoBookmarkFill size={22} /> : <GoBookmark size={22} />}

        <span className="text-[14px] font-bold leading-[22px] tracking-[0.5%] text-[#F9F9F9]">
          {isActive ? "Added Watchlist" : "Add Watchlist"}
        </span>
      </BtnOutline>
    </>
  );
};

export default HeroBtnGroup;
