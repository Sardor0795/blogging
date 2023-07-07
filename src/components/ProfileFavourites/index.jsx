import React, { useEffect, useState } from "react";
import ListSkeleton from "../ListSkeleton";
import LoadMoreButton from "../LoadMore";
import ListArticle from "./List";
import {
  BtnsWrapper,
  Container,
  Items,
  ListArticleWrapper,
  MoreBtnWrapper,
  OuterContainer,
  SavedBtn,
} from "./style";

function ProfileFavourites() {
  const [data, setData] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setData([1, 2, 3, 4, 5, 6]);
    }, 1000);
  }, []);
  return (
    <OuterContainer>
      <Container>
        <BtnsWrapper>
          <SavedBtn active="true">Saqlanganlar</SavedBtn>
          <SavedBtn>Oxirgi o’qilganlar</SavedBtn>
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

export default ProfileFavourites;
