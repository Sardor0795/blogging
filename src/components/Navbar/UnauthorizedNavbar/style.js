import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { globalContainer, signUpButton } from "../../../root/global";

export const OuterContainer = styled.div`
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: ${({ yellowbg }) =>
    yellowbg ? "var(--light-yellow)" : "var(--light-blue)"};
  padding-block: 18px;
  transition: 0.2s linear;

  ${({ scrolling }) =>
    scrolling === "true" &&
    css`
      background: rgba(255, 255, 255, 0.8);
      box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.25);
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
    `}
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ForLogo = styled(Link)`
  text-decoration: none;
  width: 139px;
  display: flex;
  align-items: center;

  svg {
    width: 100%;
  }

  /* @media screen and (max-width: 400px) {
    width: 110px;
  } */
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

RightSide.Search = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.1;
  color: var(--dark-black);
  padding: 8px;
  transition: all 0.2s linear 0s;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom-color: var(--dark-black);
  }

  @media screen and (max-width: 700px) {
    display: ${({ type }) => (type === "desktop" ? "none" : "inline")};
    text-align: ${({ type }) => (type === "desktop" ? "left" : "center")};
  }
`;

export const SignUpButton = styled.button`
  ${signUpButton}

  @media screen and (max-width: 700px) {
    display: ${({ style_type }) =>
      style_type === "desktop" ? "none" : "inline"};
    text-align: ${({ style_type }) =>
      style_type === "desktop" ? "left" : "center"};
  }
`;

export const Mobile = styled.div`
  @media screen and (min-width: 701px) {
    display: none;
  }
`;

Mobile.Icon = styled.button`
  border: none;
  background: transparent;
  width: 24px;
  position: relative;
  display: flex;
  align-items: center;
`;

Mobile.Image = css`
  width: 100%;
  cursor: pointer;
  transition: 0.2s linear;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-66%);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
  }
  img {
    width: 95%;
  }
`;

Mobile.Png = styled.div`
  ${Mobile.Image};
  visibility: ${({ opened }) => (opened === "true" ? "visible" : "hidden")};
  opacity: ${({ opened }) => (opened === "true" ? 1 : 0)};
`;

Mobile.Svg = styled.div`
  ${Mobile.Image};
  visibility: ${({ opened }) => (opened === "true" ? "hidden" : "visible")};
  opacity: ${({ opened }) => (opened === "true" ? 0 : 1)};
`;

export const Menu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: calc(100vh);
  padding-top: 20px;
  transition: 0.2s linear;
  visibility: ${({ opened }) => (opened === "true" ? "visible" : "hidden")};
  opacity: ${({ opened }) => (opened === "true" ? 1 : 0)};
  background-color: transparent;
`;

export const MenuContainer = styled.div`
  ${globalContainer};
  max-width: 400px;
  margin-inline: auto;
  padding: 37px;
  background: #fff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

export const SearchButton = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
