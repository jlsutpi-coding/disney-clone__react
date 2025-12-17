import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";

import GlobalApi from "./services/GlobalApi.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { GenresContext } from "./Context.jsx";

const Template = () => {
  const [genres, setGenres] = useState({
    movie: [],
    tv: [],
  });

  useEffect(() => {
    const fetchGenres = async () => {
      const [movieRes, tvRes] = await Promise.all([
        GlobalApi.getGenres("movie"),
        GlobalApi.getGenres("tv"),
      ]);

      setGenres({
        movie: movieRes.data.genres,
        tv: tvRes.data.genres,
      });
    };

    fetchGenres();
  }, []);

  return (
    <>
      <GenresContext.Provider value={{ genres: genres }}>
        <Header />
        <Outlet />
        <Footer />
      </GenresContext.Provider>
    </>
  );
};

export default Template;
