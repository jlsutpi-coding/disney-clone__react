import React, { useState } from "react";

import GlobalApi from "../../services/GlobalApi";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

const CastSlider = ({ cast }) => {
  const [nextRef, setNextRef] = useState(null);
  const [prevRef, setPrevRef] = useState(null);
  return (
    <>
      {cast.length > 0 && (
        <div className="relative">
          <h4 className=" mb-4 font-bold text-[18px] leading-[26px] tracking-[0.12px]">
            Top Cast
          </h4>
          <Swiper
            slidesPerView={2}
            modules={[Navigation]}
            slidesPerGroup={2}
            spaceBetween={16}
            breakpoints={{}}
            navigation={{ nextEl: nextRef, prevEl: prevRef }}
          >
            {cast.map((item) => {
              return (
                <SwiperSlide key={item.id} className="w-50">
                  <div className=" flex gap-3  shrink-0 items-center">
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
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* left arrow */}
          <button
            ref={setPrevRef}
            className=" lg:flex hidden absolute w-[167px] bg-[linear-gradient(90deg,#0D0C0F_18.88%,rgba(13,12,15,0)_99.97%,#0D0C0F_99.97%)]  justify-start h-12   z-20 left-[-70px] pl-5 bottom-1 items-center"
          >
            <MdOutlineKeyboardArrowLeft
              aria-label="Scroll cast left"
              // onClick={() => onScrollLeft(elementRef.current)}
              className=" bg-[#28262D] hover:bg-[#7b7a7d] text-white w-7 h-7 rounded-full cursor-pointer"
            />
          </button>

          {/* right arrow */}
          <button
            ref={setNextRef}
            className=" lg:flex hidden absolute w-[167px]  justify-end h-12 bg-[linear-gradient(269.96deg,#0D0C0F_18.88%,rgba(13,12,15,0)_99.97%,#0D0C0F_99.97%)]  z-20 right-[-70px] bottom-1 pr-5 items-center"
          >
            <MdOutlineKeyboardArrowRight
              aria-label="Scroll cast right"
              // onClick={() => onScrollRight(elementRef.current)}
              className=" bg-[#28262D] hover:bg-[#7b7a7d] text-white w-7 h-7 rounded-full cursor-pointer"
            />
          </button>
        </div>
      )}
    </>
  );
};

export default CastSlider;
