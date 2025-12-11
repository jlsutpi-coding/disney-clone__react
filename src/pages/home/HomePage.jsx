import Slider from "./Slider";
import GenreMovieList from "./GenreMovieList";
import ProductionHouse from "./ProductionHouse";

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  );
};

export default HomePage;
