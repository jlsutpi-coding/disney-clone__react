import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { SwiperSlide } from "swiper/react";

import GlobalApi from "../../../services/GlobalApi.jsx";
import HorizontalScroller from "../../../components/HorizontalScroller.jsx";
import RowMovieCard from "../../../components/RowMoiveCard.jsx";

const Universe = ({ detail }) => {
  const { belongs_to_collection } = detail;
  const [universe, setUniverse] = useState([]);

  useEffect(() => {
    if (belongs_to_collection) {
      const fetchUniverse = async () => {
        const response = await GlobalApi.getCollection(
          belongs_to_collection.id,
        );
        //  filter out the exsited show deatil card
        const data = response.data.parts.filter(
          (item) => item.id !== detail.id,
        );

        setUniverse(data);
      };
      fetchUniverse();
    }
  }, [belongs_to_collection, detail]);

  if (!universe.length) return null;
  return (
    <div className=" py-5 md:py-7  lg:py-10 w-full">
      <HorizontalScroller>
        {universe.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/${item.media_type}/${item.id}`}>
              <RowMovieCard item={item} media_type={item.media_type} />
            </Link>
          </SwiperSlide>
        ))}
      </HorizontalScroller>
    </div>
  );
};

export default Universe;
