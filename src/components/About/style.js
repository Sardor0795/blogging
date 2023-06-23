import styled from "styled-components";
import { globalContainer } from "../../root/global";
import headerBg from "../../assets/images/header_bg.svg";

export const OuterContainer = styled.div`
  background-color: #fff;
  min-height: 100vh;
  position: relative;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
`;
