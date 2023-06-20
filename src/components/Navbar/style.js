import styled from "styled-components";
import { globalContainer } from "../../root/global";

export const OuterContainer = styled.div`
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: #f4f9ff;
  padding-block: 20px;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
`;
