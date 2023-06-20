import styled from "styled-components";
import { globalContainer } from "../../root/global";

export const OuterContainer = styled.div`
  min-height: 100vh;
  background-color: #fff;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
`;
