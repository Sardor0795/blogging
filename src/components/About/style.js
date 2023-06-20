import styled from "styled-components";
import { globalContainer } from "../../root/global";

export const OuterContainer = styled.div`
  background-color: #fff;
  min-height: 100vh;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
`;
