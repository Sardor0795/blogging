import React from "react";
import LoadMoreButton from "../LoadMore";
import ListArticle from "./List";
import {
  AddArticle,
  BtnsWrapper,
  Container,
  ListArticleWrapper,
  MoreBtnWrapper,
  OuterContainer,
  PageTitle,
  SavedBtn,
} from "./style";

import { ReactComponent as Plus } from "../../assets/icons/plus-gray.svg";

function ProfileArticles() {
  return (
    <OuterContainer>
      <Container>
        <PageTitle>Maqolalar</PageTitle>
        <BtnsWrapper>
          <AddArticle>
            <Plus style={{ marginRight: "8px" }} />
            Yangi maqola chop etish
          </AddArticle>
          <SavedBtn active="true">Saqlanganlar</SavedBtn>
          <SavedBtn>Oxirgi o’qilganlar</SavedBtn>
          <SavedBtn>Moderatsiyaga yuborilganlar</SavedBtn>
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
