import Slider from "./Slider";
import ProductionHouse from "./ProductionHouse";
import GenreMovieList from "./GenreMovieList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <div className="">
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList /> <Footer />
    </div>
  );
};

export default HomePage;
