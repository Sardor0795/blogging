import React from "react";
import { Container, OuterContainer } from "./style";
import { ReactComponent as Image } from "../../assets/images/loading.svg";

function Loader() {
  return (
    <OuterContainer>
      <Container>
        <Image />
      </Container>
    </OuterContainer>
  );
}

export default Loader;
