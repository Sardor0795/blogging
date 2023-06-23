import styled from "styled-components";
import { globalContainer } from "../../root/global";

export const OuterContainer = styled.div`
  min-height: 100vh;
  padding-block: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    max-width: 25%;
  }
`;
