import React from "react";
import Header from "./Header";
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
          <CarouserSectionWrapper></CarouserSectionWrapper>
        </Container>
        <HeaderBgImg />
      </OuterContainer>
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
