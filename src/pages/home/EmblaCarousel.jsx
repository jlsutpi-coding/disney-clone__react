import { useContext } from "react";

import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";

import { DotButton, useDotButton } from "./EmblaCarouselDotButton.jsx";
import CarouselItem from "./CarouselItem.jsx";
import GlobalApi from "../../services/GlobalApi.jsx";
import "./EmblaCarousel.css";
import { GenresContext } from "../../Context.jsx";

const EmblaCarousel = (props) => {
  const { slides, options } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 4000 }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const { genres } = useContext(GenresContext);

  return (
    <section className="embla  z-30 ">
      <div className="embla__viewport lg:h-[600px] " ref={emblaRef}>
        <div className="embla__container ">
          {slides.map((movie) => (
            <div className="embla__slide" key={movie.id}>
              <CarouselItem
                movie={movie}
                genres={
                  movie.media_type === "movie" ? genres?.movie : genres?.tv
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
                index === selectedIndex ? " embla__dot--selected" : "",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
