import { useRef } from "react";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const HorizontalScroller = ({ children }) => {
  const ref = useRef(null);

  const scrollLeft = () => {
    if (ref.current) {
      ref.current.scrollLeft -= ref.current.clientWidth;
    }
  };
  const scrollRight = () => {
    ref.current.scrollLeft += ref.current.clientWidth;
  };

  return (
    <div className="relative">
      {/* Similar detail images */}
      <div
        ref={ref}
        className="  flex overflow-x-auto scroll-smooth gap-4 no-scrollbar "
      >
        {children}
      </div>

      {/* Scroll left button */}
      <div className="absolute z-20 h-53 flex items-center bg-[linear-gradient(89.96deg,#0D0C0F_18.88%,rgba(13,12,15,0)_99.97%,#0D0C0F_99.97%)] bottom-[10%] py-[72px] px-5 -left-[70px]">
        <MdOutlineKeyboardArrowLeft
          onClick={() => scrollLeft(ref.current)}
          className=" bg-[#28262D] hover:bg-[#7b7a7d] text-white w-7 h-7 rounded-full cursor-pointer"
        />
      </div>

      {/* scroll right button */}
      <div className="absolute z-20 h-53  flex items-center bg-[linear-gradient(269.96deg,#0D0C0F_18.88%,rgba(13,12,15,0)_99.97%,#0D0C0F_99.97%)] bottom-[10%] py-[72px] px-5 right-[-70px] jc ">
        <MdOutlineKeyboardArrowRight
          onClick={() => scrollRight(ref.current)}
          className=" bg-[#28262D] hover:bg-[#7b7a7d] text-white w-7 h-7 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default HorizontalScroller;
