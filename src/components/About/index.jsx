import React from "react";
import Header from "./Header";
import {
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
      <HeaderBgImgMobile/>
      <Navbar yellowbg="true" />
      <Header />
      <Container>
        <UzbMapWrap>
          <UzbMap />
        </UzbMapWrap>
      </Container>
      <HeaderBgImg />
    </OuterContainer>
  );
}

export default About;
