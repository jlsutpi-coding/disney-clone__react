import { useState } from "react";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import { SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const HorizontalScroller = ({ children }) => {
  const [nextRef, setNextRef] = useState(null);
  const [prevRef, setPrevRef] = useState(null);
  return (
    <div className="relative w-full group ">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1.2}
        spaceBetween={20}
        navigation={{ nextEl: nextRef, prevEl: prevRef }}
        breakpoints={{
          640: {
            slidesPerView: 2.2,
            spaceBetween: 20,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 3.2,
            spaceBetween: 25,
            slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: 4.2,
            slidesPerGroup: 4,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 4.5,
            slidesPerGroup: 4,
            spaceBetween: 30,
          },
        }}
      >
        {children}
      </Swiper>

      <button
        className="  lg:-left-12 absolute hidden lg:block cursor-pointer bg-black/50 p-2 hover:bg-[#7b7a7d] z-20 rounded-full top-1/2 -translate-y-1/2"
        ref={setPrevRef}
      >
        <MdOutlineKeyboardArrowLeft className=" w-6 h-6 text-white" />
      </button>
      <button
        ref={setNextRef}
        className="absolute hidden lg:block bg-black/50 hover:bg-[#7b7a7d] cursor-pointer rounded-full p-2 lg:right-5 z-20 top-1/2 -translate-y-1/2"
      >
        <MdOutlineKeyboardArrowRight className="w-6 h-6 text-white " />
      </button>
      <div className="absolute hidden lg:flex  right-0 top-0 z-10 h-full w-12 lg:w-20  items-center justify-center transparent bg-linear-to-l from-[#0d0c0f] to-transparent"></div>
    </div>
  );
};

export default HorizontalScroller;
