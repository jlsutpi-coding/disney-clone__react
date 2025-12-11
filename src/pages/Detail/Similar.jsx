import { useEffect, useRef, useState } from "react";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import GlobalApi from "../../services/GlobalApi";
import SimilarCard from "./SimilarCard";

const Similar = ({ media_type, id }) => {
  const [similar, setSimilar] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    const fetchSimilar = async () => {
      const response = await GlobalApi.getSimilar(id, media_type);
      setSimilar(response.data.results);
    };
    fetchSimilar();
  }, [id, media_type]);

  if (!similar) return;

  const onScrollRight = (element) => {
    element.scrollLeft += element.clientWidth;
  };
  const onScrollLeft = (element) => {
    element.scrollLeft -= element.clientWidth;
  };

  return (
    <div className="relative py-10 pl-[75px] border border-[#ffffff1a]   ">
      {/* Header */}
      <h4 className=" mb-6 text-[#f9f9f9] font-bold text-[24px] leading-8 tracking-[0.5%] ">
        Similar {media_type} for you
      </h4>
      {/* Similar detail images */}
      <div
        ref={elementRef}
        className="  flex overflow-x-auto scroll-smooth gap-4 no-scrollbar "
      >
        {similar.map((item) => {
          return (
            <SimilarCard media_type={media_type} item={item} key={item.id} />
          );
        })}
      </div>

      {/* Scroll left button */}
      <div className="absolute z-20 h-64 flex items-center bg-[linear-gradient(89.96deg,#0D0C0F_18.88%,rgba(13,12,15,0)_99.97%,#0D0C0F_99.97%)] bottom-10 py-[72px] px-5 left-0 ">
        <MdOutlineKeyboardArrowLeft
          onClick={() => onScrollLeft(elementRef.current)}
          className=" bg-[#28262D] hover:bg-[#7b7a7d] text-white w-7 h-7 rounded-full cursor-pointer"
        />
      </div>

      {/* Scroll Right button */}
      <div className="absolute z-20 h-64 flex items-center bg-[linear-gradient(269.96deg,#0D0C0F_18.88%,rgba(13,12,15,0)_99.97%,#0D0C0F_99.97%)] bottom-10 py-[72px] px-5 right-0 ">
        <MdOutlineKeyboardArrowRight
          onClick={() => onScrollRight(elementRef.current)}
          className=" bg-[#28262D] hover:bg-[#7b7a7d] text-white w-7 h-7 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Similar;
