import styled from "styled-components";
import { globalContainer } from "../../root/global";

export const OuterContainer = styled.div`
  background-color: var(--light-blue);
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
`;
