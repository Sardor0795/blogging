import styled from "styled-components";
import noImg from "../../../../assets/images/no-img.png";
import { Link } from "react-router-dom";

export const PopCardWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PopCardImg = styled(Link)`
  background-image: url(${({ cardimg }) => (cardimg ? cardimg : noImg)});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 80px;
  height: 80px;
  margin-right: 16px;
  border-radius: 8px;
`;

export const PopCardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PopCardInfoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  @media (max-width: 355px) {
    flex-wrap: wrap;
  }
`;
export const PopCardDate = styled.div`
  color: #969696;
  font-size: 12px;
  font-family: Inter;
  line-height: 1.1;
  letter-spacing: 0.48px;
  text-transform: uppercase;
`;
export const PopCardDot = styled.span`
  width: 4px;
  height: 4px;
  background-color: #969696;
  border-radius: 50%;
  margin: 0 8px;
`;
export const PopCardAuthor = styled.div`
  color: #969696;
  font-size: 13px;
  font-family: Inter;
  line-height: 1.1;
`;

export const PopCardTitle = styled.div`
  max-width: 264px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const TitleLink = styled(Link)`
  color: #1c1c1c;
  font-size: 16px;
  font-family: Inter;
  font-weight: 500;
  line-height: 24px;
  transition: color 0.2s ease;
  &:hover {
    color: var(--blue);
  }
  @media (max-width: 355px) {
    font-size: 14px;
    line-height: 1.1;
  }
`;
