import styled from "styled-components";
import { globalContainer, signUpButton } from "../../../root/global";
import { ReactComponent as linkIcon } from "../../../assets/icons/more_link_icon.svg";
import headerBg from "../../../assets/images/header_bg.svg";
import { Link } from "react-router-dom";

export const OuterContainer = styled.div`
  background-color: var(--light-blue);
  background-image: url("${headerBg}");
  background-repeat: no-repeat;
  background-position: left calc(50% + 477px) bottom calc(-132px);
  @media (max-width: 1024px) {
    background-size: 40%;
    background-position: left calc(50% + 326px) bottom calc(-85px);
  }
  @media (max-width: 771px) {
    background-size: 60%;
    background-position: left calc(50% + 252px) bottom calc(-83px);
  }
  @media (max-width: 600px) {
    background-size: 55%;
    background-position: left calc(50% + 100px) bottom calc(30px);
  }
  @media (max-width: 376px) {
    background-size: 65%;
    background-position: left calc(50% + 54px) bottom calc(46px);
  }
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  padding: 48px 0;
`;

export const HeaderTitle = styled.h1`
  color: #3a3a3a;
  font-size: 64px;
  font-family: Mountella;
  max-width: 824px;
  margin-bottom: 16px;
  @media (max-width: 771px) {
    font-size: 48px;
    width: 100%;
  }
  @media (max-width: 515px) {
    font-size: 41px;
  }
  @media (max-width: 440px) {
    font-size: 36px;
  }
  @media (max-width: 390px) {
    font-size: 31px;
  }
  @media (max-width: 335px) {
    font-size: 30px;
  }
  @media (max-width: 325px) {
    font-size: 29px;
  }
`;

export const HeaderText = styled.p`
  color: #3a3a3a;
  font-size: 20px;
  font-family: Inter;
  line-height: 28px;
  margin-bottom: 40px;
  @media (max-width: 771px) {
    font-size: 20px;
    margin-bottom: 32px;
  }
  @media (max-width: 376px) {
    font-size: 16px;
  }
`;

export const SignUpButton = styled.button`
  ${signUpButton}
  margin-bottom: 32px;
`;

export const HashTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const HashTag = styled(Link)`
  text-decoration: none;
  color: #1c1c1c;
  font-size: 16px;
  font-family: Inter;
  line-height: 24px;
  &:not(:last-child) {
    margin-right: 24px;
  }
  margin-bottom: 32px;
`;

export const MoreContentLink = styled(Link)`
  text-decoration: none;
  color: #0085ff;
  text-align: center;
  font-size: 16px;
  font-family: Inter;
  line-height: 24px;
  display: flex;
  align-items: center;
  transition: 0.2s linear;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const MoreLinkIcon = styled(linkIcon)`
  width: 16px;
  height: 16px;
  margin-left: 4px;
`;
