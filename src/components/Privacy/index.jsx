import React from "react";
import Header from "./Header";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {
  Container,
  HeaderBgImg,
  HeaderBgImgMobile,
  OuterContainer,
} from "./style";
import Navbar from "../Navbar";

function PrivacyComponent() {
  return (
    <>
      <OuterContainer>
        <HeaderBgImgMobile />
        <Navbar yellowbg="true" fixed="true" />
        <Header />
        <Container></Container>
        <HeaderBgImg />
      </OuterContainer>
    </>
  );
}

export default PrivacyComponent;
