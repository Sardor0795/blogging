import React from "react";
import Header from "./Header";
import {
  AboutContentBtn,
  AboutContentText,
  AboutContentWrap,
  Container,
  HeaderBgImg,
  HeaderBgImgMobile,
  OuterContainer,
  UzbMap,
  UzbMapWrap,
} from "./style";
import Navbar from "../Navbar/index";

function About() {
  return (
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
  );
}

export default About;
