import React from "react";
import Header from "./Header";
import {
  ArticleContent,
  ArticleInfoBox,
  ArticleInfoIcon,
  ArticleInfosWrapper,
  ArticleShare,
  Btn,
  Container,
  HeaderBgImg,
  HeaderBgImgMobile,
  OuterContainer,
  SaveBtn,
  ShareLink,
  ShareLinksWrapper,
  ShareText,
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

import facebookIcon from "../../assets/icons/facebook_share.png";
import telegramIcon from "../../assets/icons/telegram_share.png";
import twitterIcon from "../../assets/icons/twitter_share.png";

import likeIcon from "../../assets/icons/like_share.png";
import complaintIcon from "../../assets/icons/complaint_share.png";

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

          <ArticleContent>Article content</ArticleContent>

          <ArticleShare>
            <ShareText>Ulashish</ShareText>
            <ShareLinksWrapper>
              <ShareLink icon={facebookIcon} />
              <ShareLink icon={telegramIcon} />
              <ShareLink icon={twitterIcon} />
            </ShareLinksWrapper>
            <Btn>
              <ArticleInfoIcon icon={likeIcon} />
              +5
            </Btn>
            <Btn>
              <ArticleInfoIcon icon={complaintIcon} />
              Shikoyat qilish
            </Btn>
          </ArticleShare>
        </Container>
        <HeaderBgImg />
      </OuterContainer>
    </>
  );
}

export default ArticleInfoComponent;
