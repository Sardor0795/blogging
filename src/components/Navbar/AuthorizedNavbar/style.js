import styled, { css } from "styled-components";
import { globalContainer } from "./../../../root/global";
import { Link, NavLink } from "react-router-dom";

export const OuterContainer = styled.div`
  position: ${({ fixed }) => (fixed ? "fixed" : "sticky")};
  width: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: var(--light-yellow);
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

  @media screen and (max-width: 400px) {
    width: 109px;
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 700px) {
    gap: 10px;
  }
`;

RightSide.Search = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchButton = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
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
`;

export const Profile = styled.div`
  position: relative;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;
  z-index: 12;
`;

ProfileHeader.Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #1c1c1c;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
`;

ProfileHeader.Icon = styled.div`
  width: 12px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s linear;
  transform: rotate(${({ opened }) => (opened === "true" ? "180deg" : "0")});

  img {
    width: 100%;
  }
`;

export const ProfileArrow = styled.div`
  position: absolute;
  z-index: 12;
  top: calc(100% + 3px);
  right: 0;
  width: 14px;
  height: 14px;
  border-radius: 2px;
  background-color: #fff;
  transform: rotate(45deg);
  transition: 0.2s linear;

  visibility: ${({ opened }) => (opened === "true" ? "visible" : "hidden")};
  opacity: ${({ opened }) => (opened === "true" ? 1 : 0)};

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const ProfileBody = styled.div`
  position: absolute;
  z-index: 12;
  top: calc(100% + 10px);
  right: -14px;
  height: 20px;
  border-radius: 8px;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  transition: 0.2s linear;

  visibility: ${({ opened }) => (opened === "true" ? "visible" : "hidden")};
  opacity: ${({ opened }) => (opened === "true" ? 1 : 0)};

  div:first-child {
    padding: 8px 0 0;
    border-radius: 8px 8px 0 0;
  }
  div:last-child {
    padding: 0 0 8px;
    border-radius: 0 0 8px 8px;
  }

  @media screen and (max-width: 700px) {
    right: 0;
  }
`;

export const ProfileLinkCon = styled.div`
  padding: 4px 0;
  background-color: #fff;
`;

export const ProfileLink = styled(Link)`
  text-decoration: none;
  padding: 8px 16px;
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.2s linear;

  &:hover {
    background-color: var(--light-blue);
  }
`;

ProfileLink.Icon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
  }
`;

ProfileLink.Text = styled.span`
  display: flex;
  align-items: center;
  color: var(--dark-black);
  font-size: 13px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1;
  white-space: nowrap;
`;

export const Layer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100vw;
  height: 100vh;
  background-color: transparent;

  visibility: ${({ opened }) => (opened === "true" ? "visible" : "hidden")};
  opacity: ${({ opened }) => (opened === "true" ? 1 : 0)};
`;
