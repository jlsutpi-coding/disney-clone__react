import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GlobalApi from "../../services/GlobalApi";
import Detail from "./Detail";

const Company = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  const { company_id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      // fetch movie
      const responseMovie = await GlobalApi.getByCompany("movie", company_id);
      setMovies(responseMovie.data.results);

      // fetch series
      const responseSeries = await GlobalApi.getByCompany("tv", company_id);
      setSeries(responseSeries.data.results);
    };
    fetchMovie();
  }, [company_id]);

  return (
    <div className="h-sn text-white pt-20 px-[75px]">
      {/* Movie Part */}
      {movies.length && (
        <div className=" my-10">
          <h4 className="my-5 text-2xl font-extrabold">Moives</h4>
          <div className="flex flex-wrap gap-x-4 gap-5 items-center justify-start">
            {movies.map((movie) => (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <Detail key={movie.id} detail={movie} />
              </Link>
            ))}
          </div>
        </div>
      )}
      {series.length && (
        <div className=" my-10">
          <h4 className="my-5 text-2xl font-extrabold">Series</h4>
          <div className="flex flex-wrap gap-x-4 gap-5 items-center justify-start">
            {series.map((tv) => (
              <Link key={tv.id} to={`/tv/${tv.id}`}>
                <Detail key={tv.id} detail={tv} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Company;
