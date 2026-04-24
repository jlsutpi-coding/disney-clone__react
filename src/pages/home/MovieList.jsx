import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { SwiperSlide } from "swiper/react";

import GlobalApi from "../../services/GlobalApi.jsx";
import RowMovieCard from "../../components/RowMoiveCard.jsx";
import ColMovieCard from "../../components/ColMovieCard.jsx";
import MovieCardSkeleton from "../../components/MovieCardSkeleton.jsx";
import HorizontalScroller from "../../components/HorizontalScroller.jsx";

const MovieList = ({ genreId, index }) => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <HorizontalScroller>
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
    </HorizontalScroller>
  );
};

export default MovieList;
