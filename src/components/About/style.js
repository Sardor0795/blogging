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
  width: 100%;
  max-width: 855px;
  height: 556px;
`;
