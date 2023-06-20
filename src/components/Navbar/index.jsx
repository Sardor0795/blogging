import React from "react";
import { Outlet } from "react-router-dom";
import { Container, OuterContainer } from "./style";

function Navbar() {
  return (
    <>
      <OuterContainer>
        <Container>n</Container>
      </OuterContainer>
      <Outlet />
    </>
  );
}

export default Navbar;
