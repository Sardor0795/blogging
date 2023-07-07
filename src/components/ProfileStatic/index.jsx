import React from "react";
import { useState } from "react";
import {
  BtnsWrapper,
  Container,
  OuterContainer,
  PageTitle,
  FilterBtn,
  SelectIcon,
} from "./style";

function ProfileStatic() {
  const [open, setOpen] = useState(false);

  const selectToogler = () => {
    setOpen(!open);
  };

  return (
    <OuterContainer>
      <Container>
        <PageTitle>Statistika</PageTitle>
        <BtnsWrapper>
          <FilterBtn onClick={selectToogler}>
            Oy davomida
            <SelectIcon open={open} />
          </FilterBtn>
        </BtnsWrapper>
      </Container>
    </OuterContainer>
  );
}

export default ProfileStatic;
