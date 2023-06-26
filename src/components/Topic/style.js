import styled from "styled-components";
import { globalContainer } from "../../root/global";

export const OuterContainer = styled.div`
  min-height: 100vh;
  background-color: #fff;
  padding-bottom: 80px;
`;

export const TopicsContainer = styled.div`
  ${globalContainer};
  margin-inline: auto;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ButtonRow = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
