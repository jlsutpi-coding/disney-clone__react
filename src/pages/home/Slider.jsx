import { useContext, useEffect, useState } from "react";

import GlobalApi from "../../services/GlobalApi.jsx";
import DetailSkeleton from "../../components/DetailSkeleton.jsx";
import CarouselItem from "./CarouselItem.jsx";
import { GenresContext } from "../../context/GenresContext.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper/modules";

import "swiper/css/pagination";

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const { genres } = useContext(GenresContext);

  console.log(genres);
  const OPTIONS = { loop: true };

  useEffect(() => {
    const fetchData = async () => {
      const response = await GlobalApi.getTrendingVideos();
      setMovieList(response.data.results);
    };
    fetchData();
  }, []);
  console.log(movieList);

  if (movieList.length === 0) return <DetailSkeleton />;
  return (
    <Swiper pagination={{ clickable: true }} modules={[Pagination]}>
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
