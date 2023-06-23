import styled from "styled-components";
import { globalContainer } from "../../root/global";
import { ReactComponent as headerBg } from "../../assets/images/header_bg.svg";
import uzbMap from "../../assets/images/uzb_map.png";

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
    left: 10%;
  }
`;

export const UzbMapWrap = styled.div`
  padding: 94px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UzbMap = styled.div`
  background-image: url("${uzbMap}");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 100%;
  max-width: 855px;
  height: 556px;
`;
