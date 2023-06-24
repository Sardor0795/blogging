import React from "react";
import { SplideSlide } from "@splidejs/react-splide";
import { CarouselBox, CarouselBoxImg, CarouselBoxTitle } from "./style";

export const CarouselSlide = ({ img, title }) => {
  return (
    <SplideSlide>
      <CarouselBox>
        <CarouselBoxImg img={img} />
        <CarouselBoxTitle>{title}</CarouselBoxTitle>
      </CarouselBox>
    </SplideSlide>
  );
};
