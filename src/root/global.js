import { css } from "styled-components";

export const globalContainer = css`
  @media screen and (max-width: 1400px) {
    width: 94%;
  }

  @media screen and (min-width: 1400.01px) {
    width: 1230px;
  }
`;

export const signUpButton = css`
  border: none;
  padding: 8px 12px;
  background-color: #1c1c1c;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.06),
    0px 1px 1px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.1;
  text-align: center;
  color: #ffffff;
  transition: 0.2s linear;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;
