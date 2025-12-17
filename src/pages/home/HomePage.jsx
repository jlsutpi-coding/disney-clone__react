import Slider from "./Slider.jsx";
import GenreMovieList from "./GenreMovieList.jsx";
import ProductionHouse from "./ProductionHouse.jsx";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  );
};

export default HomePage;
