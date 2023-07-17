import styled from "styled-components";
import { globalContainer } from "../../root/global";

export const OuterContainer = styled.div``;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  min-height: 100vh;
`;

export const PageTitle = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  padding-top: 48px;
`;

export const BtnsWrapper = styled.div`
  padding-top: 48px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 880px) {
    justify-content: center;
  }
`;

export const SavedBtn = styled.button`
  color: ${({ active }) => (active ? "#0085ff" : "#585757")};
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding: 8px 12px;
  margin-bottom: 48px;
  border-radius: 8px;
  background-color: ${({ active }) => (active ? "var(--light-blue)" : "#fff")};
  outline: none;
  border: none;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 16px;
  }
  transition: 0.2s linear;

  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
  @media (max-width: 880px) {
    margin-bottom: 30px;
  }
  @media (max-width: 340px) {
    font-size: 15px;
    padding: 6px 10px;
  }
`;

export const ListArticleWrapper = styled.div`
  padding-bottom: 80px;
  @media (max-width: 600px) {
    padding-bottom: 40px;
  }
`;

export const MoreBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 80px;
  @media (max-width: 600px) {
    padding-bottom: 40px;
  }
`;

export const Items = styled.div`
  display: grid;
  gap: 24px;
`;

// Alert Modal

export const AlertModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  background-color: rgba(22, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 999;
  align-items: center;
  justify-content: center;
  display: ${({ opened }) => (opened === "true" ? "flex" : "none")};
`;

export const AlertContent = styled.div`
  max-width: 400px;
  width: 100%;
  height: 150px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const AlertText = styled.div`
  color: #1c1c1c;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 140% */
  margin-bottom: 24px;
  @media (max-width: 400px) {
    font-size: 18px;
  }
`;

export const AlertBtns = styled.div`
  display: flex;
  button {
    padding: 4px 8px;
    width: 80px;
    border-radius: 8px;
    border: 1px solid #e8e8e8;
    background: #fff;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    color: var(--dark-black);
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    transition: 0.2s linear;

    &:hover {
      transform: translateY(-1px);
    }
    &:active {
      transform: translateY(0);
    }
  }
`;

export const AlertBtn = styled.button`
  &:first-child {
    margin-right: 16px;
  }
`;
