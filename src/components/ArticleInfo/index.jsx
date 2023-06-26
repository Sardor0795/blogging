import React from "react";
import Header from "./Header";
import {
  ArticleInfoBox,
  ArticleInfoIcon,
  ArticleInfosWrapper,
  Container,
  HeaderBgImg,
  HeaderBgImgMobile,
  OuterContainer,
  SaveBtn,
  SubscribeBtn,
  UserImg,
  UserName,
  UserWrapper,
} from "./style";
import Navbar from "../Navbar";

import calendarIcon from "../../assets/icons/calendar.png";
import commentsIcon from "../../assets/icons/comment.png";
import clockIcon from "../../assets/icons/clock.png";
import addIcon from "../../assets/icons/add_to_favorites_filled.png";

function ArticleInfoComponent() {
  return (
    <>
      <OuterContainer>
        <HeaderBgImgMobile />
        <Navbar fixed="true" />
        <Header />
        <Container>
          <UserWrapper>
            <UserImg />
            <UserName>Akbarali Khasanov</UserName>
            <SubscribeBtn>Obuna bo‘lish</SubscribeBtn>
          </UserWrapper>
          <ArticleInfosWrapper>
            <ArticleInfoBox>
              <ArticleInfoIcon icon={calendarIcon} />
              14 Iyun, 2023
            </ArticleInfoBox>
            <ArticleInfoBox border="true">
              <ArticleInfoIcon icon={commentsIcon} />8 Izoh
            </ArticleInfoBox>
            <ArticleInfoBox>
              <ArticleInfoIcon icon={clockIcon} />3 daqiqa
            </ArticleInfoBox>
            <SaveBtn>
              <ArticleInfoIcon icon={addIcon} />
              Saqlash
            </SaveBtn>
          </ArticleInfosWrapper>
        </Container>
        <HeaderBgImg />
      </OuterContainer>
    </>
  );
}

export default ArticleInfoComponent;
