import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { SwiperSlide } from "swiper/react";

const HorizontalScroller = ({ children }) => {
  return (
    <div className="relative w-full">
      <Swiper modules={[Navigation]} slidesPerView={2}>
        {children}
      </Swiper>

      <button>
        <MdOutlineKeyboardArrowLeft />
      </button>
      <button>
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
};

export default HorizontalScroller;
