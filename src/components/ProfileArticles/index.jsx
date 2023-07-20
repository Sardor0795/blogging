import React, { useEffect, useState } from "react";
import LoadMoreButton from "../LoadMore";
import ListArticle from "./List";
import ListSkeleton from "../ListSkeleton";
import {
  AlertBtn,
  AlertBtns,
  AlertContent,
  AlertModal,
  AlertText,
  BtnsWrapper,
  Container,
  Items,
  ListArticleWrapper,
  MoreBtnWrapper,
  OuterContainer,
  PageTitle,
  SavedBtn,
} from "./style";

function ProfileArticles() {
  const [data, setData] = useState(null);
  const [alertOpened, setAlertOpened] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setData([1, 2, 3, 4, 5, 6]);
    }, 500);
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
                    <ListArticle
                      setopened={setAlertOpened}
                      id={index + 1}
                      data={item}
                    />
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
      <AlertModal
        opened={`${alertOpened}`}
        onClick={() => setAlertOpened(!alertOpened)}
      >
        <AlertContent onClick={(e) => e.stopPropagation()}>
          <AlertText>Rostan o'chirmoqchimisiz?</AlertText>
          <AlertBtns>
            <AlertBtn onClick={() => setAlertOpened(!alertOpened)}>Ha</AlertBtn>
            <AlertBtn onClick={() => setAlertOpened(!alertOpened)}>
              Yo'q
            </AlertBtn>
          </AlertBtns>
        </AlertContent>
      </AlertModal>
    </OuterContainer>
  );
}

export default ProfileArticles;
