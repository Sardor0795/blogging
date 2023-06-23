import React from "react";
import { Container, OuterContainer } from "./style";

function AuthorizedNavbar({yellowbg}) {
  return (
    <OuterContainer yellowbg={yellowbg}>
      <Container>auth</Container>
    </OuterContainer>
  );
}

export default AuthorizedNavbar;
