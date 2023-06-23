import React from "react";
import Header from "./Header";
import { Container, OuterContainer } from "./style";
import Navbar from "../Navbar/index";

function About() {
  return (
    <OuterContainer>
      <Navbar yellowbg="true"/>
      <Header />
      <Container></Container>
    </OuterContainer>
  );
}

export default About;
