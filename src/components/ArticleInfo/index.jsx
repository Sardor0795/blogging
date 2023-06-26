import React from "react";
import Header from "./Header";
import {
  Container,
  HeaderBgImg,
  HeaderBgImgMobile,
  OuterContainer,
} from "./style";
import Navbar from "../Navbar";

function ArticleInfoComponent() {
  return (
    <>
      <OuterContainer>
        <HeaderBgImgMobile />
        <Navbar yellowbg="true" fixed="true" />
        <Header />
        <Container>asdasdasdasdasd</Container>
        <HeaderBgImg />
      </OuterContainer>
    </>
  );
}

export default ArticleInfoComponent;
