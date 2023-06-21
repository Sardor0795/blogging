import styled, { css } from "styled-components";

export const OuterContainer = styled.div`
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: var(--light-blue);
  padding-block: 20px;
`;

const container = css`
  @media screen and (max-width: 1500px) {
    width: 94%;
  }

  @media screen and (min-width: 1500.01px) {
    width: 1430px;
  }
`;

export const Container = styled.div`
  ${container};
  margin-inline: auto;
`;
