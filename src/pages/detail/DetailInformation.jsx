import { useEffect, useState } from "react";

import { HiOutlineUserCircle } from "react-icons/hi2";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import GlobalApi from "../../services/GlobalApi.jsx";
import CastSlider from "./CastSlider.jsx";

const DetailInformation = ({ detail, media_type }) => {
  const { id, overview } = detail;

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const response = await GlobalApi.getCastForDetail(id, media_type);
      setCast(response.data.cast);
    };

    fetchCast();
  }, [id, media_type]);

  if (!cast || !detail) return null;

  return (
    <div className=" flex flex-col px-5  md:px-[45px] lg:px-[75px] gap-3 lg:gap-6 pt-[15px] lg:pt-[30px] pb-5 lg:pb-10 ">
      {/* Story Line */}
      <div className="">
        <h4 className=" mb-4 font-bold  lg:text-[18px] leading-[26px] tracking-[0.12px]">
          Story Line
        </h4>
        <p className=" hidden md:block text-[16px] font-medium leading-6 tracking-[0.5%] text-[#9CA4AB]">
          {overview}
        </p>
        <p className=" block md:hidden text-[16px] font-medium leading-6 tracking-[0.5%] text-[#9CA4AB]">
          {overview && overview.length > 120
            ? overview.slice(0, 180) + "..."
            : overview}
        </p>
      </div>

      {/* Top Cast */}
      <CastSlider cast={cast} />
    </div>
  );
};

export default DetailInformation;
