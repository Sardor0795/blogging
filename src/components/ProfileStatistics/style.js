import styled from "styled-components";
import { globalContainer } from "../../root/global";

import selectIcon from "../../assets/icons/select_icon.png";

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

export const FilterBtn = styled.button`
  color: ${({ active }) => (active ? "#0085ff" : "#585757")};
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.06);
  background-color: ${({ active }) => (active ? "var(--light-blue)" : "#fff")};
  outline: none;
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

export const SelectIcon = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  background-image: url("${selectIcon}");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  transition: transform 0.3s ease;
  transform: ${({ open }) => (open ? "rotate(-180deg)" : "rotate(0deg)")};
`;
