import styled from "styled-components";
import { globalContainer } from "../../root/global";
import { ReactComponent as headerBg } from "../../assets/images/header_bg.svg";
import uzbMap from "../../assets/images/uzb_map.png";

import appleImg from "../../assets/images/mobile_apple_img.png";
import playImg from "../../assets/images/mobile_playmarket_img.png";
import mobileImg from "../../assets/images/mobile-img.png";

export const OuterContainer = styled.div`
  background-color: #fff;
  min-height: 100vh;
  position: relative;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
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

export const UzbMapWrap = styled.div`
  padding: 94px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 771px) {
    padding: 65px 0;
  }
  @media (max-width: 600px) {
    padding: 48px 0;
  }
`;

export const UzbMap = styled.div`
  background-image: url("${uzbMap}");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 100%;
  max-width: 855px;
  height: 556px;
  @media (max-width: 771px) {
    height: 360px;
  }
  @media (max-width: 375px) {
    height: 185px;
  }
`;

export const AboutContentWrap = styled.div`
  padding: 80px 0;
  @media (max-width: 600px) {
    padding: 48px 0;
  }
`;

export const AboutContentText = styled.p`
  color: #1c1c1c;
  font-size: 64px;
  font-family: Mountella;
  margin-bottom: 32px;
  @media (max-width: 771px) {
    font-size: 48px;
  }
  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

export const AboutContentBtn = styled.button`
  color: #1c1c1c;
  text-align: center;
  font-size: 20px;
  font-family: Inter;
  font-weight: 500;
  line-height: 28px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  background: #fff;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.06);
  padding: 12px 16px;
  transition: transform 0.2s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

// Carousel

export const CarouserSectionWrapper = styled.div`
  padding: 80px 0;
`;

// Mobile App

export const MobileAppWrapper = styled.div`
  padding: 62px 0;
  background-color: #e8d7ff;
  height: 320px;
  overflow: hidden;
  @media (max-width: 950px) {
    height: 400px;
  }
  @media (max-width: 800px) {
    height: 440px;
  }
  @media (max-width: 650px) {
    height: auto;
  }
`;

export const MobileAppInner = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    align-items: center;
  }
  @media (max-width: 650px) {
    flex-wrap: wrap;
  }
`;

export const MobileAppContent = styled.div`
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const MobileTitle = styled.h3`
  color: #000;
  font-size: 36px;
  font-family: Inter;
  font-weight: 500;
  line-height: 48px;
  margin-bottom: 20px;
  @media (max-width: 950px) {
    margin-top: 50px;
  }
  @media (max-width: 800px) {
    margin-top: 0;
  }
`;

export const MobileText = styled.p`
  color: #000;
  font-size: 20px;
  font-family: Inter;
  line-height: 28px;
  margin-bottom: 48px;
`;

export const MobileBtns = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 650px) {
    justify-content: center;
  }
`;

export const DownBtnApple = styled.button`
  width: 156px;
  height: 52px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  background: #fff;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.06);
  background-image: url("${appleImg}");
  background-repeat: no-repeat;
  background-position: center center;
  margin-right: 16px;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
  @media (max-width: 650px) {
    width: 114px;
    height: 38px;
    background-size: 90px;
  }
`;

export const DownBtnPlay = styled.button`
  width: 156px;
  height: 52px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  background: #fff;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.06);
  background-image: url("${playImg}");
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
  @media (max-width: 650px) {
    width: 114px;
    height: 38px;
    background-size: 90px;
  }
`;

export const MobileAppImg = styled.div`
  width: 345px;
  height: 687px;
  background-image: url("${mobileImg}");
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 950px) {
    width: 300px;
    height: 600px;
  }
  @media (max-width: 800px) {
    width: 173px;
    height: 344px;
  }
  @media (max-width: 650px) {
    order: -1;
    margin-bottom: 32px;
    margin-right: auto;
    margin-left: auto;
  }
`;
