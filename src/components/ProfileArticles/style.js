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
