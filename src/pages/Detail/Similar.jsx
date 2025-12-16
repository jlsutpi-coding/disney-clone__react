import { useEffect, useRef, useState } from "react";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import GlobalApi from "../../services/GlobalApi";
import SimilarCard from "./SimilarCard";
import HorizontalScroller from "../../components/HorizontalScroller";

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

  return (
    <div className="relative py-10 px-[75px] border border-[#ffffff1a]   ">
      {/* Header */}
      <h4 className=" mb-6 text-[#f9f9f9] font-bold text-[24px] leading-8 tracking-[0.5%] ">
        Similar {media_type} for you
      </h4>

      <HorizontalScroller>
        {similar.map((item) => (
          <SimilarCard media_type={media_type} item={item} key={item.id} />
        ))}
      </HorizontalScroller>
    </div>
  );
};

export default Similar;
