import { useEffect, useRef, useState } from "react";

import { HiOutlineUserCircle } from "react-icons/hi2";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import GlobalApi from "../../services/GlobalApi";

const DetailInformation = ({ detail, media_type }) => {
  const [cast, setCast] = useState();
  const elementRef = useRef();

  useEffect(() => {
    const fetchCast = async () => {
      const response = await GlobalApi.getCastForDetail(detail.id, media_type);
      setCast(response.data.cast);
    };
    fetchCast();
  }, [detail.id, media_type]);

  const onScrollRight = (element) => {
    element.scrollLeft += element.clientWidth;
  };
  const onScrollLeft = (element) => {
    element.scrollLeft -= element.clientWidth;
  };

  if (!cast) {
    return;
  }

  return (
    <div className=" flex flex-col px-[75px] gap-6 pt-[30px] pb-10 ">
      {/* Story Line */}
      <div className="">
        <h4 className=" mb-4 font-bold text-[18px] leading-[26px] tracking-[0.12px]">
          Story Line
        </h4>
        <p className="text-[16px] font-medium leading-6 tracking-[0.5%] text-[#9CA4AB]">
          {detail.overview}
        </p>
      </div>

      {/* Top Cast */}
      <div className="relative">
        <h4 className=" mb-4 font-bold text-[18px] leading-[26px] tracking-[0.12px]">
          Top Cast
        </h4>

        {/* Cater images */}
        <div
          ref={elementRef}
          className="  overflow-x-auto  w-full items-center flex gap-6  no-scrollbar  scroll-smooth"
        >
          {cast.map((item) => {
            return (
              <div key={item.id} className=" flex gap-3  shrink-0 items-center">
                {item.profile_path ? (
                  <img
                    src={`${GlobalApi.IMAGE_BASE_URL}/${item.profile_path}`}
                    alt="actor-photo"
                    className=" rounded-full w-12 h-12 object-cover overflow-hidden "
                  />
                ) : (
                  <HiOutlineUserCircle className=" rounded-full w-14 h-14 object-cover overflow-hidden " />
                )}

                <div>
                  <p className=" font-semibold text-[16px] leading-6 tracking-[0.5%] ">
                    {item.original_name}
                  </p>
                  <p className=" text-[12px] leading-5 tracking-[0.5%] font-medium text-[#9CA4AB]">
                    {item.character}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* left arrow */}
        <div className="absolute w-[167px] bg-[linear-gradient(90deg,#0D0C0F_18.88%,rgba(13,12,15,0)_99.97%,#0D0C0F_99.97%)] flex justify-start h-12   z-20 left-[-70px] pl-5 bottom-1 items-center">
          <MdOutlineKeyboardArrowLeft
            onClick={() => onScrollLeft(elementRef.current)}
            className=" bg-[#28262D] hover:bg-[#7b7a7d] text-white w-7 h-7 rounded-full cursor-pointer"
          />
        </div>

        {/* right arrow */}
        <div className="absolute w-[167px] flex justify-end h-12 bg-[linear-gradient(269.96deg,#0D0C0F_18.88%,rgba(13,12,15,0)_99.97%,#0D0C0F_99.97%)]  z-20 right-[-70px] bottom-1 pr-5 items-center">
          <MdOutlineKeyboardArrowRight
            onClick={() => onScrollRight(elementRef.current)}
            className=" bg-[#28262D] hover:bg-[#7b7a7d] text-white w-7 h-7 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailInformation;
