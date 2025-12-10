import React from "react";
import Header from "../../components/Header";
import Slider from "./Slider";
import ProductionHouse from "./ProductionHouse";
import GenreMovieList from "./GenreMovieList";

const HomePage = () => {
  return (
    <div className="">
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />{" "}
    </div>
  );
};

export default HomePage;
