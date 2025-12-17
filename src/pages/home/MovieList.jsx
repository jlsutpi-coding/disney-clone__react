import { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

import GlobalApi from "../../services/GlobalApi.jsx";
import RowMovieCard from "../../components/RowMoiveCard.jsx";
import ColMovieCard from "../../components/ColMovieCard.jsx";

const screenWidth = window.innerWidth;

const MovieList = ({ genreId, index }) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovirByGenreId = async () => {
      const response = await GlobalApi.getMovieByGenreId(genreId);
      setMovieList(response.data.results);
    };
    getMovirByGenreId();
  }, [genreId]);

  const elementRef = useRef(null);

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };
  return (
    <div className="relative">
      {/* left arrow */}
      <IoChevronBackOutline
        className={` hidden md:block  text-white cursor-pointer text-[30px] absolute ${
          index % 3 === 0 ? "top-[30%]" : "top-[45%]"
        } z-10 `}
        onClick={() => slideLeft(elementRef.current)}
      />

      {/* Right arrow */}
      <IoChevronForwardOutline
        className={` hidden md:block z-20  text-white cursor-pointer text-[30px] absolute right-0 ${
          index % 3 === 0 ? "top-[30%]" : "top-[45%]"
        }`}
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto  gap-5 lg:gap-10 no-scrollbar pt-3 lg:pt-5 pb-10 lg:px-3 scroll-smooth"
      >
        {movieList.map((item) => {
          return (
            <Link
              key={item.id}
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
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
