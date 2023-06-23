import styled, { css } from "styled-components";
import { globalContainer } from "../../../root/global";

export const OuterContainer = styled.div`
  background-color: #fff;
  padding-block: 50px 80px;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
`;

const gridStyle = css`
  ${({ type }) =>
    type === "card"
      ? css`
          grid-template-columns: 1fr 1fr 1fr;

          @media screen and (max-width: 1050px) {
            grid-template-columns: 1fr 1fr;
          }
          @media screen and (max-width: 650px) {
            grid-template-columns: 1fr;
          }
        `
      : css`
          grid-template-columns: 1fr;
        `}
`;

export const Items = styled.div`
  display: grid;
  gap: 24px;
  ${gridStyle}
`;
