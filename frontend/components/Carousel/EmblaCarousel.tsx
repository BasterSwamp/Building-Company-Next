"use client";

import { FC, useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import StrapiImage from "../StrapiImage";

type Slide = {
  images: string[];
  title: string;
  link: string;
};

interface CarouselProps {
  slides: string[] | Slide[] | undefined;
  options?: EmblaOptionsType;
  isControlVisible?: boolean;
}

const defaultOptions: EmblaOptionsType = {
  loop: true,
};

const EmblaCarousel: FC<CarouselProps> = (props) => {
  const { slides, options = defaultOptions, isControlVisible = true } = props;

  if (slides.length === 1) {
    const slide = slides[0];
    return (
      <div className="embla__slide overflow-hidden ">
        <div className="embla__slide__number">
          {typeof slide === "string" ? (
            <StrapiImage
              src={slide}
              alt="carousel image"
              fill
              className="object-cover"
            />
          ) : (
            <Link href={slide.link}>
              <StrapiImage
                src={slide.images[0]}
                alt="carousel image"
                fill
                className="object-cover"
              />
              <h3 className="absolute left-8 bottom-4 inline-block text-white bg-gradient-to-r from-black to-transparent p-2">
                {slide.title}
              </h3>
            </Link>
          )}
        </div>
      </div>
    );
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div
              className="embla__slide overflow-hidden "
              key={`slide-${index}`}
            >
              <div className="embla__slide__number">
                {typeof slide === "string" ? (
                  <StrapiImage
                    src={slide}
                    alt="carousel image"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <Link href={slide.link}>
                    <StrapiImage
                      src={slide.images[0]}
                      alt="carousel image"
                      fill
                      className="object-cover"
                    />
                    <h3 className="absolute left-8 bottom-4 inline-block text-white bg-gradient-to-r from-black to-transparent p-2">
                      {slide.title}
                    </h3>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {isControlVisible && (
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>

          <div className="embla__dots">
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
      )}
    </section>
  );
};

export default EmblaCarousel;
