import React from "react";
import Header from "./Header";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import {
  AboutContentBtn,
  AboutContentText,
  AboutContentWrap,
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
import { mockData } from "./mockData";
import { CarouselSlide } from "./Carousel";

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
            focus: "center",
            arrows: false,
            pagination: false,
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            pauseOnFocus: true,
            easing: "ease",
            breakpoints: {
              1024: {
                perPage: 3,
              },
              771: {
                perPage: 2,
              },
              500: {
                perPage: 1,
              },
            },
          }}
          aria-label="My Favorite Images"
        >
          {mockData.map((v) => (
            <CarouselSlide key={v.id} img={v.img} title={v.title} />
          ))}
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
