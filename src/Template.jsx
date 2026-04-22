import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";

import GlobalApi from "./services/GlobalApi.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { GenresContext } from "./context/GenresContext.jsx";
import TrailerVideo from "./components/TrailerVideo.jsx";
import { TrailerContext } from "./context/TrailerContext.jsx";

const Template = () => {
  const [genres, setGenres] = useState({
    movie: [],
    tv: [],
  });
  const [trailerState, setTrailerState] = useState({
    open: false,
    trailerId: "",
    trailerMediaType: "",
  });

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const [movieRes, tvRes] = await Promise.all([
          GlobalApi.getGenres("movie"),
          GlobalApi.getGenres("tv"),
        ]);

        setGenres({
          movie: movieRes.data.genres,
          tv: tvRes.data.genres,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchGenres();
  }, []);

  const openTrailer = (id, media_type) => {
    setTrailerState({
      open: true,
      trailerId: id,
      trailerMediaType: media_type,
    });
  };
  const closeTrailer = () => {
    setTrailerState({ open: false, trailerId: "", trailerMediaType: "" });
  };

  return (
    <div className=" relative ">
      <GenresContext.Provider value={{ genres }}>
        <TrailerContext.Provider
          value={{ trailerState, setTrailerState, openTrailer, closeTrailer }}
        >
          <Header />
          <Outlet />
          <Footer />
          <TrailerVideo />
        </TrailerContext.Provider>
      </GenresContext.Provider>
    </div>
  );
};

export default Template;
