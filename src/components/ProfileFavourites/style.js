import styled from "styled-components";
import { globalContainer } from "../../root/global";

export const OuterContainer = styled.div``;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  min-height: 100vh;
`;

export const BtnsWrapper = styled.div`
  padding: 48px 0;
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
