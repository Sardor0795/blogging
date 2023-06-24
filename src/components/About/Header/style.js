import styled from "styled-components";
import { globalContainer } from "../../../root/global";

export const OuterContainer = styled.div`
  background-color: var(--light-yellow);
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  padding: 85px 0 75px 0;
  @media (max-width: 600px) {
    padding: 48px 0;
  }
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