import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

// Import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper Style
import "swiper/css";
import "swiper/css/navigation";

import GlobalApi from "../../services/GlobalApi.jsx";
import RowMovieCard from "../../components/RowMoiveCard.jsx";
import ColMovieCard from "../../components/ColMovieCard.jsx";
import MovieCardSkeleton from "../../components/MovieCardSkeleton.jsx";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const MovieList = ({ genreId, index }) => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  useEffect(() => {
    const getMoviesByGenreId = async () => {
      try {
        setLoading(true);
        const response = await GlobalApi.getMovieByGenreId(genreId);
        setMovieList(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getMoviesByGenreId();
  }, [genreId]);

  if (movieList.length === 0 && !loading) {
    return (
      <div className="text-center text-gray-400 py-10">No movies found</div>
    );
  }
  if (loading) {
    return (
      <div className="flex overflow-x-auto gap-5 lg:gap-10 no-scrollbar pt-3 lg:pt-5 pb-10 lg:px-3 scroll-smooth">
        {index % 3 === 0
          ? Array.from({ length: 5 }).map((_, index) => (
              <MovieCardSkeleton type="row" key={index} />
            ))
          : Array.from({ length: 5 }).map((_, index) => (
              <MovieCardSkeleton type="col" key={index} />
            ))}
      </div>
    );
  }

  return (
    <div className="relative group">
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        navigation={{
          prevEl: prevEl,
          nextEl: nextEl,
        }}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 4,
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
        {movieList.map((item) => (
          <SwiperSlide key={item.id} className="pt-3 pb-10">
            <Link
              className="cursor-pointer"
              to={`${item.title ? "movie" : "tv"}/${item.id}`}
            >
              {index % 3 === 0 ? (
                <RowMovieCard
                  item={item}
                  media_type={item.title ? "movie" : "tv"}
                />
              ) : (
                <ColMovieCard item={item} />
              )}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={setPrevEl}
        className="absolute hidden lg:block hover:bg-[#7b7a7d] cursor-pointer z-20 top-1/2 -translate-y-1/2 left-0 lg:-left-10 bg-black/50  p-2 rounded-full transition-all"
      >
        <MdOutlineKeyboardArrowLeft className="text-white w-6 h-6" />
      </button>

      <button
        ref={setNextEl}
        className="absolute hidden lg:block hover:bg-[#7b7a7d] cursor-pointer z-20 top-1/2 -translate-y-1/2 right-0 lg:right-5 bg-black/50  p-2 rounded-full transition-all"
      >
        <MdOutlineKeyboardArrowRight className="text-white w-6 h-6" />
      </button>
      <div className="absolute hidden lg:flex  right-0 top-0 z-10 h-full w-12 lg:w-20  items-center justify-center transparent bg-linear-to-l from-[#0d0c0f] to-transparent"></div>
    </div>
  );
};

export default MovieList;
