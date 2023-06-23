import styled from "styled-components";
import { globalContainer } from "./../../root/global";

export const Layer = styled.div`
  position: fixed;
  z-index: 12;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: 0.2s linear;
  background-color: rgba(22, 0, 0, 0.5);
  visibility: ${({ opened }) => (opened === "true" ? "visible" : "hidden")};
  opacity: ${({ opened }) => (opened === "true" ? 1 : 0)};
  padding-top: 100px;
`;

export const Menu = styled.div`
  width: 100%;
  visibility: ${({ opened }) => (opened === "true" ? "visible" : "hidden")};
  opacity: ${({ opened }) => (opened === "true" ? 1 : 0)};
`;

export const MenuContainer = styled.div`
  ${globalContainer};
  margin-inline: auto;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 567px;
  padding: 32px 30px;
  background-color: #fff;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1), 0px 1px 18px rgba(0, 0, 0, 0.06),
    0px 6px 10px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;
