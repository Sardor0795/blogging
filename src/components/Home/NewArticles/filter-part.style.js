import styled from "styled-components";

export const TopPart = styled.div`
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

TopPart.Leftside = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  color: var(--dark-black);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
`;

TopPart.Rightside = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Dropdown = styled.div`
  position: relative;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const DropdownHeader = styled.div`
  min-width: 215px;
  position: relative;
  z-index: 9;
  padding: 1px 5px 1px 20px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  background: #fff;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--gray);
  font-size: 16px;
  line-height: 1.1;
  transition: 0.2s linear;
`;

export const DropdownBody = styled.div`
  position: absolute;
  z-index: 9;
  top: calc(100% + 3px);
  right: 0;
  min-width: 215px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  background: #fff;
  padding: 8px 0;
  transition: 0.2s linear;
  visibility: ${({ opened }) => (opened === "true" ? "visible" : "hidden")};
  opacity: ${({ opened }) => (opened === "true" ? 1 : 0)};
  display: flex;
  flex-direction: column;
`;

DropdownBody.Item = styled.div`
  padding: 10px 20px;
  background-color: #fff;
  color: var(--gray);
  /* color: var(--dark-black); */
  font-size: 16px;
  line-height: 1.1;
  transition: 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: var(--light-blue);
    color: var(--gray);
  }
`;

export const Layer = styled.div`
  position: fixed;
  z-index: 8;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

export const ListCard = styled.div`
  border-radius: 8px;
  background: #f7f7f7;
  padding: 2px;
  display: flex;
  gap: 4px;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

ListCard.Item = styled.div`
  padding: 6px 12px;
  border-radius: 6px;
  background: ${({ active }) => (active === "true" ? "#fff" : "transparent")};
  box-shadow: ${({ active }) =>
    active === "true" ? "0px 1px 1px 0px rgba(0, 0, 0, 0.06)" : "none"};
  transition: 0.2s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
