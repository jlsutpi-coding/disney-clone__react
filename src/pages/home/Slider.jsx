import { useContext, useEffect, useState } from "react";

import GlobalApi from "../../services/GlobalApi.jsx";

import DetailSkeleton from "../../components/DetailSkeleton.jsx";

import CarouselItem from "./CarouselItem.jsx";

import { GenresContext } from "../../context/GenresContext.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./Swiper-dot.css";

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const { genres } = useContext(GenresContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await GlobalApi.getTrendingVideos();
      setMovieList(response.data.results);
    };
    fetchData();
  }, []);

  if (movieList.length === 0) return <DetailSkeleton />;
  return (
    <Swiper
      autoplay={{ delay: 3000 }}
      loop={true}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
    >
      {movieList.map((movie) => (
        <SwiperSlide key={movie.id}>
          <CarouselItem
            movie={movie}
            genres={movie.media_type === "movie" ? genres?.movie : genres?.tv}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
