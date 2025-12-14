import { useEffect, useState } from "react";

import GlobalApi from "../../services/GlobalApi";
import EmblaCarousel from "./EmblaCarousel";

const Slider = () => {
  const [movieList, setMovieList] = useState([]);

  const OPTIONS = { loop: true };

  useEffect(() => {
    const fetchData = async () => {
      const response = await GlobalApi.getTrendingVideos();
      setMovieList(response.data.results);
    };
    fetchData();
  }, []);

  if (movieList.length === 0) return null;
  return <EmblaCarousel slides={movieList} options={OPTIONS} />;
};

export default Slider;
