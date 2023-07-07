import React, { useEffect, useState } from "react";
import LoadMoreButton from "../LoadMore";
import ListArticle from "./List";
import {
  BtnsWrapper,
  Container,
  Items,
  ListArticleWrapper,
  MoreBtnWrapper,
  OuterContainer,
  PageTitle,
  SavedBtn,
} from "./style";

import ListSkeleton from "../ListSkeleton";

function ProfileArticles() {
  const [data, setData] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setData([1, 2, 3, 4, 5, 6]);
    }, 1000);
  }, []);
  return (
    <OuterContainer>
      <Container>
        <PageTitle>Maqolalar</PageTitle>
        <BtnsWrapper>
          <SavedBtn active="true">Chop etilganlar</SavedBtn>
          <SavedBtn>Qoralamalar</SavedBtn>
          <SavedBtn>Moderatsiyaga yuborilganlar</SavedBtn>
        </BtnsWrapper>
        <ListArticleWrapper>
          <Items>
            {data
              ? data?.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListArticle id={index + 1} data={item} />
                  </React.Fragment>
                ))
              : Array(6)
                  .fill()
                  .map((item, index) => (
                    <React.Fragment key={index}>
                      <ListSkeleton />
                    </React.Fragment>
                  ))}
          </Items>
        </ListArticleWrapper>
        <MoreBtnWrapper>
          <LoadMoreButton />
        </MoreBtnWrapper>
      </Container>
    </OuterContainer>
  );
}

export default ProfileArticles;
