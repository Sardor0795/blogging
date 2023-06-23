import styled from "styled-components";
import { globalContainer } from "../../root/global";
import { ReactComponent as Logo } from "../../assets/images/footer_logo.svg";
import { Link } from "react-router-dom";

import { ReactComponent as faceBookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as twitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as youTubeIcon } from "../../assets/icons/youtube.svg";

import appStoreIcon from "../../assets/icons/app-store.png";
import playMarketIcon from "../../assets/icons/play-market.png";

export const OuterContainer = styled.div`
  background-color: #f7f7f7;
  padding: 48px 0;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 850px) {
    flex-wrap: wrap;
  }
`;

export const LogoLinkWrapper = styled(Link)`
  margin-right: 48px;
  @media (max-width: 850px) {
    width: 100%;
    margin-bottom: 32px;
  }
`;

export const FooterLogo = styled(Logo)`
  width: 139px;
  height: 37px;
  flex-shrink: 0;
`;

export const Content = styled.div`
  max-width: 552px;
  margin-right: 60px;
  @media (max-width: 1096px) {
    margin-right: 32px;
  }
`;

export const ContentLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 32px;
  @media (max-width: 1070px) {
    margin-bottom: 0px;
  }
`;

export const ContentLinkWrapper = styled.div`
  &:not(:last-child) {
    margin-right: 32px;
  }
  @media (max-width: 1136px) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
  @media (max-width: 1070px) {
    margin-right: 0px;
    margin-bottom: 24px;
    width: 50%;
    &:not(:last-child) {
      margin-right: 0px;
      padding-right: 20px;
    }
  }
  @media (max-width: 930px) {
    &:nth-child(2n) {
      text-align: right;
    }
  }
  @media (max-width: 850px) {
    width: unset;
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }
  @media (max-width: 590px) {
    width: 100%;
    &:nth-child(2n) {
      text-align: unset;
    }
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;

export const ContentLink = styled(Link)`
  color: #585757;
  text-align: center;
  font-size: 16px;
  font-family: Inter;
  line-height: 24px;
  transition: color 0.2s ease;
  white-space: nowrap;
  &:hover {
    color: var(--blue);
  }
`;

export const ContentText = styled.p`
  color: #969696;
  font-size: 13px;
  font-family: Inter;
  line-height: 20px;
  margin-bottom: 24px;
`;

export const ContentCopyright = styled.p`
  color: #969696;
  font-size: 13px;
  font-family: Inter;
  line-height: 20px;
  @media (max-width: 850px) {
    display: none;
  }
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 850px) {
    align-items: flex-start;
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 64px;
`;

export const SocialMedia = styled(Link)`
  transition: color 0.2s ease;
  color: #969696;
  &:hover {
    color: var(--blue);
  }
  &:active {
    transform: translateY(2px);
  }
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const FaceBookIcon = styled(faceBookIcon)``;
export const TwitterIcon = styled(twitterIcon)``;
export const YouTubeIcon = styled(youTubeIcon)``;

export const Downloads = styled.div`
  display: flex;
  @media (max-width: 850px) {
    margin-bottom: 32px;
  }
`;

export const DownloadAppStore = styled(Link)`
  background-image: url(${appStoreIcon});
  background-repeat: no-repeat;
  background-size: cover;
  width: 124px;
  height: 36px;
  margin-right: 16px;
  &:active {
    transform: translateY(2px);
  }
`;
export const DownloadPlayMarket = styled(Link)`
  background-image: url(${playMarketIcon});
  background-repeat: no-repeat;
  background-size: cover;
  width: 124px;
  height: 36px;
  &:active {
    transform: translateY(2px);
  }
`;

export const MobileCopyright = styled.p`
  color: #969696;
  font-size: 13px;
  font-family: Inter;
  line-height: 20px;
  display: none;
  width: 100%;
  @media (max-width: 850px) {
    display: block;
  }
`;
