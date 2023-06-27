import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  background-color: #fff;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.2s linear;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--dark-color);
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;

  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;
