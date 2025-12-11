import { useEffect, useRef, useState } from "react";

import GlobalApi from "../../services/GlobalApi";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const [movieList, setMovieList] = useState([]);

  const elementRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await GlobalApi.getTrendingVideos;
      setMovieList(response.data.results);
    };
    fetchData();
  }, []);

  const sliderRight = (element) => {
    const cardWidth = element.firstChild.clientWidth;
    element.scrollLeft += cardWidth + 20;
  };
  const slideLeft = (element) => {
    const cardWidth = element.firstChild.clientWidth;
    element.scrollLeft -= cardWidth + 20;
  };

  return (
    <div className=" ">
      {/* left arrow  icon */}
      <HiChevronLeft
        onClick={() => slideLeft(elementRef.current)}
        className=" hidden md:block text-white text-[30px] absolute mx-8 mt-[150px]"
      />

      {/* right arrow icon */}
      <HiChevronRight
        onClick={() => sliderRight(elementRef.current)}
        className=" hidden md:block text-white text-[30px] absolute right-0 mt-[150px] mx-8"
      />

      <div
        className=" no-scrollbar flex overflow-x-auto w-full px-16 py-4 scroll-smooth "
        ref={elementRef}
      >
        {movieList?.map((item) => {
          return (
            <img
              onClick={() => navigate(`/${item.media_type}/${item.id}`)}
              key={item.id}
              src={GlobalApi.IMAGE_BASE_URL + item.backdrop_path}
              alt="movie image"
              className=" min-w-full md:h-[310px] object-cover cursor-pointer object-center mr-5 rounded-md hover:border-2 border-gray-400 transition-all duration-100 ease-in"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
