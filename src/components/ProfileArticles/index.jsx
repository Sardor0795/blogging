import React from "react";
import LoadMoreButton from "../LoadMore";
import ListArticle from "./List";
import {
  BtnsWrapper,
  Container,
  ListArticleWrapper,
  MoreBtnWrapper,
  OuterContainer,
  SavedBtn,
} from "./style";

function ProfileArticles() {
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
        <MoreBtnWrapper>
          <LoadMoreButton />
        </MoreBtnWrapper>
      </Container>
    </OuterContainer>
  );
}

export default ProfileArticles;
