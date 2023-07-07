import React from "react";
import {
  BtnsWrapper,
  Container,
  OuterContainer,
  PageTitle,
  FilterBtn,
} from "./style";

function ProfileStatic() {
  return (
    <OuterContainer>
      <Container>
        <PageTitle>Statistika</PageTitle>
        <BtnsWrapper>
          <FilterBtn>Oy davomida</FilterBtn>
        </BtnsWrapper>
      </Container>
    </OuterContainer>
  );
}

export default ProfileStatic;
