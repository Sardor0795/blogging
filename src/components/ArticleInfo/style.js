import styled from "styled-components";
import { globalContainer } from "../../root/global";
import { ReactComponent as headerBg } from "../../assets/images/header_bg.svg";
import userImg from "../../assets/images/info_post_user_img.jpg";
import { Link } from "react-router-dom";

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
  top: -120px;
  left: calc(50% + 355px);
  z-index: 10;
  pointer-events: none;
  @media (max-width: 1450px) {
    left: calc(50% + 300px);
  }
  @media (max-width: 1300px) {
    left: calc(50% + 200px);
  }
  @media (max-width: 1200px) {
    left: calc(50% + 200px);
    top: 0px;
  }
  @media (max-width: 1024px) {
    left: calc(50% + 200px);
    top: 60px;
    width: 400px;
    height: 400px;
  }
  @media (max-width: 950px) {
    left: calc(50% + 100px);
    top: 80px;
    width: 350px;
    height: 350px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const HeaderBgImgMobile = styled(headerBg)`
  width: 500px;
  height: 500px;
  position: absolute;
  top: -120px;
  left: calc(50% + 355px);
  z-index: 10;
  pointer-events: none;
  display: none;
  @media (max-width: 700px) {
    left: calc(50% + 100px);
    top: 80px;
    width: 350px;
    height: 350px;
    display: block;
  }
  @media (max-width: 655px) {
    left: calc(50% + 50px);
    width: 350px;
    height: 350px;
  }
  @media (max-width: 600px) {
    left: 40%;
    width: 300px;
    height: 300px;
  }
  @media (max-width: 500px) {
    left: 30%;
  }
  @media (max-width: 400px) {
    width: 250px;
    height: 250px;
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
`;
export const UserName = styled.div`
  color: #585757;
  font-size: 20px;
  font-family: Inter;
  font-weight: 500;
  line-height: 24px;
  margin-right: 32px;
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
`;

export const ShareText = styled.div`
  margin-right: 24px;
  color: #1c1c1c;
  font-size: 20px;
  font-family: Inter;
  font-weight: 500;
  line-height: 28px;
`;

export const ShareLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
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
  background: ${({ bgBlack }) => (bgBlack ? "#1C1C1C" : "#fff")};
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.06);
  color: ${({ bgBlack }) => (bgBlack ? "#fff" : "#1c1c1c")};
  text-align: center;
  font-size: 13px;
  font-family: Inter;
  font-weight: 500;
  line-height: 20px;
  padding: 8px 12px;
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
`;

// Comments -----------

export const CommentsBlock = styled.div``;
export const CommentsBlockInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 32px 0;
`;
export const CommentsCount = styled.div`
  margin-right: 24px;
  color: #1c1c1c;
  font-size: 20px;
  font-family: Inter;
  font-weight: 500;
  line-height: 28px;
  margin-right: auto;
`;

export const CommentsBlockText = styled.div`
  color: #969696;
  text-align: right;
  font-size: 13px;
  font-family: Inter;
  line-height: 20px;
  margin-right: 20px;
`;
