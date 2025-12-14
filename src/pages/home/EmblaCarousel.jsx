import { useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";

import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import CarouselItem from "./CarouselItem";
import GlobalApi from "../../services/GlobalApi";
import "./EmblaCarousel.css";

const EmblaCarousel = (props) => {
  const { slides, options } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 4000 }),
  ]);
  const [genresMovie, setGenresMovie] = useState([]);
  const [genresSeries, setGenresSeries] = useState([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  useEffect(() => {
    const fetchGenres = async () => {
      const responseForMovie = await GlobalApi.getGenres("movie");
      const responseForSeries = await GlobalApi.getGenres("tv");

      setGenresMovie(responseForMovie.data.genres);
      setGenresSeries(responseForSeries.data.genres);
    };
    fetchGenres();
  }, []);

  return (
    <section className="embla  z-30 ">
      <div className="embla__viewport h-[600px] " ref={emblaRef}>
        <div className="embla__container ">
          {slides.map((movie) => (
            <div className="embla__slide" key={movie.id}>
              <CarouselItem
                movie={movie}
                genres={
                  movie.media_type === "movie" ? genresMovie : genresSeries
                }
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls  ">
        <div className="embla__dots ">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
