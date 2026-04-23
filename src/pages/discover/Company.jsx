import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import GlobalApi from "../../services/GlobalApi.jsx";
import ColMovieCard from "../../components/ColMovieCard.jsx";
import MovieCardSkeleton from "../../components/MovieCardSkeleton.jsx";

const Company = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  const { company_id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        // fetch movie
        const responseMovie = await GlobalApi.getByCompany("movie", company_id);
        setMovies(responseMovie.data.results);

        // fetch series
        const responseSeries = await GlobalApi.getByCompany("tv", company_id);
        setSeries(responseSeries.data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [company_id]);

  console.log(movies, series);

  if (loading)
    return (
      <div className=" text-white pt-20 xl:px-[75px] lg:px-[45px]   md:px-[30px] px-5">
        {/* Movie Part */}
        <div className="  lg:my-10">
          <h4 className="my-5 text-2xl font-extrabold">Moives</h4>
          <div className="flex flex-wrap lg:gap-x-8 gap-4 lg:gap-8 items-center justify-center lg:justify-start">
            {Array.from({ length: 10 }).map((_, index) => (
              <MovieCardSkeleton key={index} />
            ))}
          </div>
        </div>
        <div className="  my-10">
          <h4 className="my-5 text-2xl font-extrabold">Series</h4>
          <div className="flex flex-wrap gap-5 lg:gap-x-8 lg:gap-8  items-center  justify-center lg:justify-start">
            {Array.from({ length: 10 }).map((_, index) => (
              <MovieCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  return (
    <div className=" text-white pt-20 xl:px-[75px] lg:px-[45px]   md:px-[30px] px-5">
      {/* Movie Part */}
      {movies.length > 0 && (
        <div className="  lg:my-10">
          <h4 className="my-5 text-2xl font-extrabold">Moives</h4>
          <div className="flex flex-wrap lg:gap-x-8 gap-4 lg:gap-8 items-center justify-center lg:justify-start">
            {movies.map((movie) => (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <ColMovieCard item={movie} />
              </Link>
            ))}
          </div>
        </div>
      )}
      {series.length > 0 && (
        <div className="  my-10">
          <h4 className="my-5 text-2xl font-extrabold">Series</h4>
          <div className="flex flex-wrap gap-5 lg:gap-x-8 lg:gap-8  items-center  justify-center lg:justify-start">
            {series.map((tv) => (
              <Link key={tv.id} to={`/tv/${tv.id}`}>
                <ColMovieCard item={tv} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Company;
