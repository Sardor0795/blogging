import styled from "styled-components";
import { globalContainer } from "../../../root/global";

export const OuterContainer = styled.div`
  background-color: #fff;
  padding-block: 50px 80px;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
