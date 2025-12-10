import { Fragment, useEffect, useRef, useState } from "react";
import "./no-scrollbar.css";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import LargeMovieCard from "./LargeMovieCard";
import { Link } from "react-router-dom";
import GlobalApi from "../../Services/GlobalApi";

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
      <IoChevronForwardOutline
        className={` hidden md:block z-20  text-white cursor-pointer text-[30px] absolute right-0 ${
          index % 3 === 0 ? "top-[30%]" : "top-[45%]"
        }`}
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-10 no-scrollbar  pt-5 pb-10 px-3 scroll-smooth"
      >
        {movieList.map((item) => (
          <Link className=" flex" to={`/movie/${item.id}`} key={item.id}>
            {index % 3 === 0 ? (
              <LargeMovieCard item={item} />
            ) : (
              <MovieCard item={item} />
            )}
          </Link>
        ))}
      </div>
      {/* right arrow */}
    </div>
  );
};

export default MovieList;
