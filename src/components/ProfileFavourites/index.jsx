import React from "react";
import ListArticle from "./List";
import {
  BtnsWrapper,
  Container,
  ListArticleWrapper,
  OuterContainer,
  SavedBtn,
} from "./style";

function ProfileFavourites() {
  return (
    <OuterContainer>
      <Container>
        <BtnsWrapper>
          <SavedBtn active="true">Saqlanganlar</SavedBtn>
          <SavedBtn>Oxirgi o’qilganlar</SavedBtn>
        </BtnsWrapper>
        <ListArticleWrapper>
          <ListArticle />
        </ListArticleWrapper>
      </Container>
    </OuterContainer>
  );
}

export default ProfileFavourites;
