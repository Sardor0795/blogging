import styled from "styled-components";
import { globalContainer } from "../../root/global";

export const OuterContainer = styled.div``;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  min-height: 100vh;
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

export const AddArticle = styled.button`
  background: #fff;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  color: var(--dark-black);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
  margin-right: 16px;
  cursor: pointer;
  margin-bottom: 48px;
  transition: 0.2s linear;
  @media (max-width: 880px) {
    margin-bottom: 30px;
  }
  @media (max-width: 340px) {
    font-size: 15px;
    padding: 6px 10px;
  }
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;
