import styled from "styled-components";
import { globalContainer, signUpButton } from "../../../root/global";
import { ReactComponent as linkIcon } from "../../../assets/icons/more_link_icon.svg";

export const OuterContainer = styled.div`
  background-color: var(--light-yellow);
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  padding: 85px 0 75px 0;
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
  max-width: 824px;
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

export const HashTag = styled.span`
  color: #1c1c1c;
  font-size: 16px;
  font-family: Inter;
  line-height: 24px;
  &:not(:last-child) {
    margin-right: 24px;
  }
  margin-bottom: 32px;
`;

export const MoreContentLink = styled.a`
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
