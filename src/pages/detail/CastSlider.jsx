import React, { useEffect, useRef, useState } from "react";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi2";

import GlobalApi from "../../services/GlobalApi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CastSlider = ({ cast }) => {
  const swiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  }, [cast]);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
    <>
      {cast.length > 0 && (
        <div>
          <h4 className=" mb-4 font-bold text-[18px] leading-[26px] tracking-[0.12px]">
            Top Cast
          </h4>

          <div className="relative">
            <Swiper
              slidesPerView={2}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSlideChange={handleSlideChange}
              slidesPerGroup={2}
              spaceBetween={15}
              breakpoints={{
                1536: {
                  slidesPerView: 6,
                  slidesPerGroup: 6,
                  spaceBetween: 25,
                },
                1280: {
                  slidesPerView: 5,
                  slidesPerGroup: 5,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 15,
                },
              }}
            >
              {cast.map((item) => {
                return (
                  <SwiperSlide key={item.id} className="w-50">
                    <div className=" flex gap-3  shrink-0 items-center">
                      {item.profile_path ? (
                        <img
                          src={`${GlobalApi.IMAGE_BASE_URL}/${item.profile_path}`}
                          alt="actor-photo"
                          loading="lazy"
                          className=" rounded-full w-12 h-12 object-cover overflow-hidden bg-[#1f1f1f] "
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

            <button
              disabled={isBeginning}
              onClick={() => swiperRef.current?.slidePrev()}
              className={`${isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"} 
    transition-opacity duration-300 lg:flex hidden absolute 
    w-[167px] justify-start h-12 top-1/2 -translate-y-1/2 z-20 
    xl:left-[-70px] pl-5 items-center`}
            >
              <MdOutlineKeyboardArrowLeft
                aria-label="Scroll cast left"
                className="bg-[#28262D] hover:bg-[#7b7a7d] text-white w-7 h-7 rounded-full cursor-pointer"
              />
            </button>

            {/* right arrow */}
            <button
              disabled={isEnd}
              onClick={() => swiperRef.current?.slideNext()}
              className={`${isEnd ? "opacity-0 pointer-events-none" : "opacity-100"} 
    transition-opacity duration-300 lg:flex hidden absolute 
    w-[167px] justify-end h-12 top-1/2 -translate-y-1/2 z-20 
    xl:right-[-70px] pr-5 items-center`}
            >
              <MdOutlineKeyboardArrowRight
                aria-label="Scroll cast right"
                className="bg-[#28262D] hover:bg-[#7b7a7d] text-white w-7 h-7 rounded-full cursor-pointer"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CastSlider;
