import styled from "styled-components";

export const SearchResultBox = styled.div`
  display: flex;
  margin-top: 16px;
  @media (max-width: 570px) {
    flex-wrap: wrap;
  }
`;
export const SearchResultBoxContent = styled.div`
  margin-right: 8px;
`;
export const SearchResultBoxTitle = styled.div`
  color: #1c1c1c;
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
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
`;
export const SearchResultBoxImg = styled.div`
  width: 100%;
  max-width: 64px;
  height: 64px;
  border-radius: 8px;
  background-color: #f2f2f2;
  @media (max-width: 570px) {
    order: -1;
    max-width: 100%;
    height: 176px;
  }
`;
