import styled from "styled-components";
import { globalContainer } from "../../root/global";
import { ReactComponent as headerBg } from "../../assets/images/header_bg.svg";
import userImg from "../../assets/images/info_post_user_img.jpg";
import { Link } from "react-router-dom";

import repliedIcon from "../../assets/icons/replyed.png";

export const OuterContainer = styled.div`
  background-color: #fff;
  min-height: 100vh;
  position: relative;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  padding: 80px 0;
  @media (max-width: 600px) {
    padding: 48px 0;
  }
`;

export const HeaderBgImg = styled(headerBg)`
  width: 500px;
  height: 500px;
  position: absolute;
  top: -420px;
  left: calc(50% + 5px);
  z-index: 10;
  pointer-events: none;
  @media (max-width: 1450px) {
    left: calc(50% + 100px);
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

// User -----------

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;
export const UserImg = styled.div`
  background-image: url("${userImg}");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  @media (max-width: 460px) {
    width: 35px;
    height: 35px;
  }
`;
export const UserName = styled.div`
  color: #585757;
  font-size: 20px;
  font-family: Inter;
  font-weight: 500;
  line-height: 24px;
  margin-right: 32px;
  @media (max-width: 460px) {
    font-size: 16px;
    margin-right: auto;
  }
  @media (max-width: 350px) {
    font-size: 14px;
  }
`;
export const SubscribeBtn = styled.button`
  color: #00ba34;
  text-align: center;
  font-size: 13px;
  font-family: Inter;
  font-weight: 500;
  line-height: 20px;
  border-radius: 20px;
  border: 1px solid #00ba34;
  background-color: unset;
  padding: 4px 12px;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
  @media (max-width: 350px) {
    padding: 2px 5px;
  }
`;

// Article infos top -----------

export const ArticleInfosWrapper = styled.div`
  padding: 18px 0;
  border-top: 1px solid #d6d6d6;
  border-bottom: 1px solid #d6d6d6;
  color: #585757;
  font-size: 16px;
  font-family: Inter;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  align-items: center;
  @media (max-width: 550px) {
    flex-wrap: wrap;
    padding-bottom: 0;
  }
`;
export const ArticleInfoIcon = styled.div`
  background-image: url("${({ icon }) => icon}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;
export const ArticleInfoBox = styled.div`
  display: flex;
  align-items: center;
  border-left: ${({ border }) => (border ? "1px solid #0085ff" : null)};
  border-right: ${({ border }) => (border ? "1px solid #0085ff" : null)};
  padding-left: ${({ border }) => (border ? "16px" : null)};
  padding-right: ${({ border }) => (border ? "16px" : null)};
  &:not(:last-child) {
    margin-right: 16px;
  }
  @media (max-width: 550px) {
    margin-bottom: 18px;
  }
`;

export const SaveBtn = styled.button`
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  background: #fff;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.06);
  color: #1c1c1c;
  text-align: center;
  font-size: 13px;
  font-family: Inter;
  font-weight: 500;
  line-height: 20px;
  padding: 4px 8px;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
  margin-left: auto;
  @media (max-width: 550px) {
    display: none;
  }
`;

// Article content --------

export const ArticleContent = styled.div`
  padding: 80px 0;
`;

// Article share ------------

export const ArticleShare = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #d6d6d6;
  border-bottom: 1px solid #d6d6d6;
  padding: 32px 0;
  @media (max-width: 550px) {
    flex-wrap: wrap;
    padding-bottom: 0;
  }
`;

export const ShareText = styled.div`
  margin-right: 24px;
  color: #1c1c1c;
  font-size: 20px;
  font-family: Inter;
  font-weight: 500;
  line-height: 28px;
  @media (max-width: 550px) {
    margin-bottom: 32px;
  }
`;

export const ShareLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  @media (max-width: 550px) {
    margin-right: 20px;
    margin-bottom: 32px;
  }
`;

export const ShareLink = styled(Link)`
  width: 32px;
  height: 32px;
  background-image: url("${({ icon }) => icon}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  &:not(:last-child) {
    margin-right: 16px;
  }
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  background: ${({ bgblack }) => (bgblack ? "#1C1C1C" : "#fff")};
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.06);
  color: ${({ bgblack }) => (bgblack ? "#fff" : "#1c1c1c")};
  text-align: center;
  font-size: 13px;
  font-family: Inter;
  font-weight: 500;
  line-height: 20px;
  padding: 5px 12px;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
  &:not(:last-child) {
    margin-right: 16px;
  }

  @media (max-width: 550px) {
    margin-bottom: ${({ mb }) => (mb ? "32px" : null)};
  }
`;

// Comments -----------

export const CommentsBlock = styled.div``;
export const CommentsBlockInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 32px 0;
  @media (max-width: 640px) {
    flex-wrap: wrap;
    padding-bottom: 0;
  }
`;
export const CommentsCount = styled.div`
  margin-right: 24px;
  color: #1c1c1c;
  font-size: 20px;
  font-family: Inter;
  font-weight: 500;
  line-height: 28px;
  margin-right: auto;
  @media (max-width: 640px) {
    margin-bottom: 32px;
    margin-right: 20px;
  }
  @media (max-width: 410px) {
    order: 4;
    width: 100%;
  }
`;

export const CommentsBlockText = styled.div`
  color: #969696;
  text-align: right;
  font-size: 13px;
  font-family: Inter;
  line-height: 20px;
  margin-right: 20px;
  @media (max-width: 640px) {
    margin-bottom: 32px;
  }
`;

export const CommentAddBtnsWrapper = styled.div`
  display: flex;
  @media (max-width: 640px) {
    margin-bottom: 32px;
  }
`;

export const CommentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
  padding-left: ${({ padding }) => `${padding}px`};
  @media (max-width: 400px) {
    flex-wrap: wrap;
  }
`;
export const CommentUserImg = styled.div`
  width: 100%;
  max-width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url("${({ userimg }) => userimg}");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin-right: 16px;
`;
export const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;
export const CommentUserInfos = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  @media (max-width: 520px) {
    flex-wrap: wrap;
  }
`;
export const CommentUser = styled.div`
  color: #1c1c1c;
  font-size: 16px;
  font-family: Inter;
  font-weight: 500;
  line-height: 24px;
  margin-right: 12px;
`;
export const CommentDate = styled.div`
  color: #969696;
  font-size: 12px;
  font-family: Inter;
  line-height: 16px;
  letter-spacing: 0.48px;
  text-transform: uppercase;
`;
export const CommentText = styled.div`
  color: #585757;
  font-size: 16px;
  font-family: Inter;
  line-height: 24px;
  margin-bottom: 12px;
`;
export const CommentReply = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 400px) {
    margin-bottom: 12px;
  }
`;
export const CommentReplyDots = styled.div`
  width: 7px;
  height: 7px;
  background-color: #969696;
  border-radius: 50%;
  position: relative;
  margin-left: 15px;
  &::before {
    content: "";
    width: 7px;
    height: 7px;
    background-color: #969696;
    border-radius: 50%;
    position: absolute;
    left: 10px;
  }
  &::after {
    content: "";
    width: 7px;
    height: 7px;
    background-color: #969696;
    border-radius: 50%;
    position: absolute;
    right: 10px;
  }
`;

export const CommentBtn = styled.div`
  display: flex;
`;
export const Comment = styled.div`
  display: flex;
`;

export const CommentReplied = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("${repliedIcon}");
  background-size: cover;
  background-position: center center;
  margin-right: 16px;
`;

// Write comment ---------

export const WriteCommentWrapper = styled.div`
  padding-top: 32px;
  border-top: 1px solid #e8e8e8;
  display: flex;
  align-items: flex-start;
`;
export const WriteCommentContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const WriteCommentText = styled.div`
  color: #585757;
  font-size: 16px;
  font-family: Inter;
  line-height: 24px;
  margin-bottom: 8px;
`;
export const WriteCommentTextArea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  margin-bottom: 16px;
  display: inline-block;
  resize: vertical;
  outline: none;
`;
