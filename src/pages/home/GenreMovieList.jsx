import { useContext } from "react";

import MovieList from "./MovieList";

import { GenresContext } from "../../context/GenresContext.jsx";

const GenreMovieList = () => {
  const { genres } = useContext(GenresContext);

  const genresList = genres?.["movie"] || [];
  return (
    <div>
      {genresList.map((item, index) => {
        return (
          index <= 4 && (
            <div key={item.id} className="md:py-8 pl-5 sm:pl-8 md:pl-16 ">
              <h2 className=" text-white font-bold text-[20px]">{item.name}</h2>
              <MovieList genreId={item.id} index={index} />
            </div>
          )
        );
      })}
    </div>
  );
};

export default GenreMovieList;
