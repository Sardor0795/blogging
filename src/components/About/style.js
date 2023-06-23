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
`;

export const HeaderBgImg = styled(headerBg)`
  width: 500px;
  height: 500px;
  position: absolute;
  top: -120px;
  right: -80px;
  z-index: 10;
  pointer-events: none;
`;
