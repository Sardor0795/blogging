import styled from "styled-components";
import { globalContainer } from "../../../root/global";
import { Link } from "react-router-dom";

export const OuterContainer = styled.div`
  background-color: #fff;
  min-height: 100vh;
  padding-bottom: 80px;
`;

export const FilterPart = styled.div`
  padding-top: 55px;
  background-color: #fff;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

export const AddTopic = styled.button`
  background: #fff;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--dark-black);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
  cursor: pointer;
  transition: 0.2s linear;

  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const TopicLink = styled(Link)`
  text-decoration: none;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: linear-gradient(
      0deg,
      rgba(0, 133, 255, 0.1) 0%,
      rgba(0, 133, 255, 0.1) 100%
    ),
    #fff;
  background: ${({ active }) =>
    active === "true"
      ? "linear-gradient(0deg, rgba(0, 133, 255, 0.1) 0%, rgba(0, 133, 255, 0.1) 100% ), #fff"
      : "#fff"};
  color: ${({ active }) => (active === "true" ? "var(--blue)" : "#585757")};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
  transition: 0.2s linear;

  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`;
