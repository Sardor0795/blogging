import React from "react";
import Header from "./Header";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import {
  AboutContentBtn,
  AboutContentText,
  AboutContentWrap,
  CarouselBox,
  CarouselBoxImg,
  CarouselBoxTitle,
  CarouserSectionWrapper,
  Container,
  DownBtnApple,
  DownBtnPlay,
  HeaderBgImg,
  HeaderBgImgMobile,
  MobileAppContent,
  MobileAppImg,
  MobileAppInner,
  MobileAppWrapper,
  MobileBtns,
  MobileText,
  MobileTitle,
  OuterContainer,
  UzbMap,
  UzbMapWrap,
} from "./style";
import Navbar from "../Navbar/index";

function About() {
  return (
    <>
      <OuterContainer>
        <HeaderBgImgMobile />
        <Navbar yellowbg="true" />
        <Header />
        <Container>
          <UzbMapWrap>
            <UzbMap />
          </UzbMapWrap>
          <AboutContentWrap>
            <AboutContentText>
              O'zbeklar yangi yilni yangi yil deb nomlangan bayram bilan
              nishonlaydilar. Ular yangi yil daraxtini bezashadi, yangi yil
              bayramini nishonlashadi va bir-birlariga sovg'alar berishadi.
            </AboutContentText>
            <AboutContentBtn>Siz ham bilim ulashing</AboutContentBtn>
          </AboutContentWrap>
        </Container>
        <HeaderBgImg />
      </OuterContainer>
          <CarouserSectionWrapper>
            <Splide
              options={{
                rewind: true,
                gap: "2rem",
                perPage: 4,
                perMove: 1,
                padding: 10,
                focus  : 'center',
                arrows: false,
                pagination: false,
                autoplay: true,
                interval: 2000,
                pauseOnHover: true,
                pauseOnFocus: true,
                breakpoints: {
                  771: {
                    perPage: 2,
                  },
                },
              }}
              aria-label="My Favorite Images"
            >
              <SplideSlide>
                <CarouselBox>
                  <CarouselBoxImg />
                  <CarouselBoxTitle>Sevara Nizamova</CarouselBoxTitle>
                </CarouselBox>
              </SplideSlide>
              <SplideSlide>
                <CarouselBox>
                  <CarouselBoxImg />
                  <CarouselBoxTitle>Sevara Nizamova</CarouselBoxTitle>
                </CarouselBox>
              </SplideSlide>
              <SplideSlide>
                <CarouselBox>
                  <CarouselBoxImg />
                  <CarouselBoxTitle>Sevara Nizamova</CarouselBoxTitle>
                </CarouselBox>
              </SplideSlide>
              <SplideSlide>
                <CarouselBox>
                  <CarouselBoxImg />
                  <CarouselBoxTitle>Sevara Nizamova</CarouselBoxTitle>
                </CarouselBox>
              </SplideSlide>
              <SplideSlide>
                <CarouselBox>
                  <CarouselBoxImg />
                  <CarouselBoxTitle>Sevara Nizamova</CarouselBoxTitle>
                </CarouselBox>
              </SplideSlide>
              <SplideSlide>
                <CarouselBox>
                  <CarouselBoxImg />
                  <CarouselBoxTitle>Sevara Nizamova</CarouselBoxTitle>
                </CarouselBox>
              </SplideSlide>
              <SplideSlide>
                <CarouselBox>
                  <CarouselBoxImg />
                  <CarouselBoxTitle>Sevara Nizamova</CarouselBoxTitle>
                </CarouselBox>
              </SplideSlide>
            </Splide>
          </CarouserSectionWrapper>
      <MobileAppWrapper>
        <Container>
          <MobileAppInner>
            <MobileAppContent>
              <MobileTitle>BossBlog</MobileTitle>
              <MobileText>
                Mobil ilova bilan o’qish yana ham qulayroq
              </MobileText>
              <MobileBtns>
                <DownBtnApple />
                <DownBtnPlay />
              </MobileBtns>
            </MobileAppContent>
            <MobileAppImg />
          </MobileAppInner>
        </Container>
      </MobileAppWrapper>
    </>
  );
}

export default About;
