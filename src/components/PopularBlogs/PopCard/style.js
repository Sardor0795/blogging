import styled from "styled-components";
import noImg from "../../../assets/images/no-img.png";
import { Link } from "react-router-dom";

export const PopCardWrapper = styled.div`
  display: flex;
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
`;
export const PopCardDate = styled.div`
  color: #969696;
  font-size: 12px;
  font-family: Inter;
  line-height: 16px;
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
  line-height: 20px;
`;

export const PopCardTitle = styled(Link)`
  color: #1c1c1c;
  font-size: 16px;
  font-family: Inter;
  font-weight: 500;
  line-height: 24px;
  max-width: 264px;
  transition: color 0.2s ease;
  &:hover {
    color: var(--blue);
  }

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;
