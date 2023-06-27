import React from "react";
import Header from "./Header";
import {
  ArticleContent,
  ArticleInfoBox,
  ArticleInfoIcon,
  ArticleInfosWrapper,
  ArticleShare,
  Btn,
  CommentAddBtnsWrapper,
  CommentContent,
  CommentDate,
  CommentReplied,
  CommentReply,
  CommentReplyDots,
  CommentsBlock,
  CommentsBlockInfo,
  CommentsBlockText,
  CommentsCount,
  CommentText,
  CommentUser,
  CommentUserImg,
  CommentUserInfos,
  CommentWrapper,
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
  WriteCommentContents,
  WriteCommentText,
  WriteCommentTextArea,
  WriteCommentWrapper,
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

import commentUserImg from "../../assets/images/comment_user_img.png";

import replyIcon from "../../assets/icons/reply.png";
import repliedIcon from "../../assets/icons/replyed.png";

function ArticleInfoComponent() {
  return (
    <>
      <OuterContainer>
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
            <Btn mb="true">
              <ArticleInfoIcon icon={likeIcon} />
              +5
            </Btn>
            <Btn mb="true">
              <ArticleInfoIcon icon={complaintIcon} />
              Shikoyat qilish
            </Btn>
          </ArticleShare>
          <CommentsBlock>
            <CommentsBlockInfo>
              <CommentsCount>6 comments</CommentsCount>
              <CommentsBlockText>
                Login or sign up to leave a comment
              </CommentsBlockText>
              <CommentAddBtnsWrapper>
                <Btn>Kirish</Btn>
                <Btn bgblack="true">Ro’yhatdan o’tish</Btn>
              </CommentAddBtnsWrapper>
            </CommentsBlockInfo>
            <CommentWrapper>
              <CommentUserImg userimg={commentUserImg} />
              <CommentContent>
                <CommentUserInfos>
                  <CommentUser>Ilhomjon Davlatov</CommentUser>
                  <CommentDate>17 Sep 2020</CommentDate>
                </CommentUserInfos>
                <CommentText>
                  Yaxshi :) Menga bu kecha juda kerak edi, chunki men bu oyda
                  ishchi kuchiga qaytaman va hech kimni xafa qilishni
                  xohlamayman! Endi sizni kuzatib boradi. rahmat :)
                </CommentText>
                <CommentReply>
                  <Btn>
                    <ArticleInfoIcon icon={replyIcon} />
                    Reply
                  </Btn>
                  <CommentReplyDots />
                </CommentReply>
              </CommentContent>
              <Btn>
                <ArticleInfoIcon icon={likeIcon} />
                +5
              </Btn>
            </CommentWrapper>
            <CommentWrapper padding="60">
              <CommentReplied />
              <CommentUserImg userimg={commentUserImg} />
              <CommentContent>
                <CommentUserInfos>
                  <CommentUser>Laylo Khakimova</CommentUser>
                  <CommentDate>17 Sep 2020</CommentDate>
                </CommentUserInfos>
                <CommentText>Jinni ursin, rahmat Akbarali!</CommentText>
                <CommentReply>
                  <Btn>
                    <ArticleInfoIcon icon={replyIcon} />
                    Reply
                  </Btn>
                  <CommentReplyDots />
                </CommentReply>
              </CommentContent>
              <Btn>
                <ArticleInfoIcon icon={likeIcon} />
                +5
              </Btn>
            </CommentWrapper>
          </CommentsBlock>
          <WriteCommentWrapper>
            <CommentUserImg userimg={commentUserImg} />
            <WriteCommentContents>
              <WriteCommentText>Izoh matni</WriteCommentText>
              <WriteCommentTextArea placeholder="Izohingiz matni bayon qiling" />
              <Btn>Chop etish</Btn>
            </WriteCommentContents>
          </WriteCommentWrapper>
        </Container>
        <HeaderBgImg />
      </OuterContainer>
    </>
  );
}

export default ArticleInfoComponent;
