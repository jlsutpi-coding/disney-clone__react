import GenreList from "../../constant/GenreList";
import MovieList from "./MovieList";

const GenreMovieList = () => {
  return (
    <div>
      {GenreList.genere.map((item, index) => {
        return (
          index <= 4 && (
            <div key={item.id} className="p-8 px-8 md:px-16 ">
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
