import styled from "styled-components";
import { globalContainer } from "../../root/global";
import { ReactComponent as headerBg } from "../../assets/images/header_bg.svg";

export const OuterContainer = styled.div`
  background-color: #fff;
  min-height: 100vh;
  position: relative;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  padding: 80px 0;
  color: #000;
  font-size: 16px;
  font-family: Inter;
  line-height: 24px;
  @media (max-width: 600px) {
    padding: 60px 0;
  }
`;

export const HeaderBgImg = styled(headerBg)`
  width: 400px;
  height: 400px;
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
  }
  @media (max-width: 1024px) {
    left: calc(50% + 200px);
    width: 400px;
    height: 400px;
  }
  @media (max-width: 950px) {
    left: calc(50% + 90px);
    width: 350px;
    height: 350px;
    top: -80px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const HeaderBgImgMobile = styled(headerBg)`
  width: 500px;
  height: 500px;
  position: absolute;
  top: -80px;
  left: calc(50% + 355px);
  z-index: 10;
  pointer-events: none;
  display: none;
  @media (max-width: 700px) {
    left: calc(50% + 100px);
    top: 0px;
    width: 260px;
    height: 260px;
    display: block;
  }
  @media (max-width: 655px) {
    left: calc(50% + 50px);
    width: 260px;
    height: 260px;
    display: block;
  }
  @media (max-width: 600px) {
    left: 50%;
    width: 260px;
    height: 260px;
  }
  @media (max-width: 540px) {
    left: 50%;
    width: 230px;
    height: 230px;
  }
  @media (max-width: 480px) {
    left: 45%;
    width: 230px;
    height: 230px;
  }
  @media (max-width: 430px) {
    left: 40%;
    width: 230px;
    height: 230px;
  }
  @media (max-width: 400px) {
    left: 40%;
    top: 10px;
    width: 210px;
    height: 210px;
  }
  @media (max-width: 366px) {
    left: 35%;
    top: 15px;
    width: 200px;
    height: 200px;
  }
`;

export const Title = styled.p`
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: ${({ top }) => (top ? "10px" : null)};
`;

export const Ol = styled.ol`
  padding-left: 30px;
`;
