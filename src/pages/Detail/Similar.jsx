import { useEffect, useState } from "react";

import GlobalApi from "../../services/GlobalApi.jsx";
import HorizontalScroller from "../../components/HorizontalScroller.jsx";
import RowMovieCard from "../../components/RowMoiveCard.jsx";
import { Link } from "react-router-dom";

const Similar = ({ media_type, id }) => {
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    const fetchSimilar = async () => {
      const response = await GlobalApi.getSimilar(id, media_type);
      setSimilar(response.data.results);
    };
    fetchSimilar();
  }, [id, media_type]);

  if (!similar) return;

  return (
    <div className="relative lg:py-10 md:py-7 py-8 px-5  md:px-[45px] lg:px-[75px] border border-[#ffffff1a]   ">
      {/* Header */}
      <h4 className=" mb-6 text-[#f9f9f9] font-bold text-[24px] leading-8 tracking-[0.5%] ">
        Similar {media_type} for you
      </h4>

      {/* Horizontal Scroll */}
      <div className="w-full">
        <HorizontalScroller>
          {similar.map((item, index) => (
            <Link key={index} to={`/${media_type}/${item.id}`}>
              <RowMovieCard media_type={media_type} item={item} />
            </Link>
          ))}
        </HorizontalScroller>
      </div>
    </div>
  );
};

export default Similar;
