import { Link } from "react-router-dom";
import styled from "styled-components";

export const SearchResultBox = styled.div`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 16px;
  }

  @media (max-width: 410px) {
    align-items: center;
  }
`;
export const SearchResultBoxContent = styled.div`
  margin-right: 8px;
  @media (max-width: 570px) {
    margin-right: 0;
  }
`;
export const SearchResultBoxTitle = styled(Link)`
  color: #1c1c1c;
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
  transition: color 0.2s ease;
  &:hover {
    color: var(--blue);
  }
  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 1.1;
  }
`;
export const SearchResultBoxText = styled.div`
  color: #969696;
  font-size: 12px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.48px;
  text-transform: uppercase;
  @media (max-width: 570px) {
    margin-top: 8px;
  }
  @media (max-width: 410px) {
    line-height: unset;
    font-size: 10px;
  }
`;
export const SearchResultBoxImg = styled(Link)`
  width: 100%;
  max-width: 64px;
  height: 64px;
  border-radius: 8px;
  background-color: #f2f2f2;

  @media (max-width: 570px) {
    order: -1;
    max-width: 80px;
    height: 80px;
    margin-right: 8px;
  }
`;
