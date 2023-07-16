import styled, { css } from "styled-components";

export const BackToTopButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: var(--blue);
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 3px;
  border: none;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s,
    transform 0.3s, box-shadow 0.3s;
  z-index: 7;
  outline: none;
  padding: 10px;
  box-sizing: border-box;
  opacity: 0;
  visibility: hidden;

  svg {
    width: 100%;
    transform: scale(1.5);

    path {
      fill: #fff;
    }
  }

  ${({ show }) => {
    return show === "true"
      ? css`
          visibility: visible;
          opacity: 0.8;
        `
      : null;
  }}

  &:hover {
    cursor: pointer;
    opacity: 1;
    transform: translateY(-3px);
  }
`;
