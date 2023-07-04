import styled from "styled-components";
import { globalContainer } from "./../../root/global";

import searchImg from "../../assets/icons/search_icon.png";
import closeImg from "../../assets/icons/close_icon.png";

export const Layer = styled.div`
  position: fixed;
  z-index: 120;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: 0.2s linear;
  background-color: rgba(22, 0, 0, 0.5);
  visibility: ${({ opened }) => (opened === "true" ? "visible" : "hidden")};
  opacity: ${({ opened }) => (opened === "true" ? 1 : 0)};
  padding-top: 20px;
`;

export const Menu = styled.div`
  width: 100%;
  visibility: ${({ opened }) => (opened === "true" ? "visible" : "hidden")};
  opacity: ${({ opened }) => (opened === "true" ? 1 : 0)};
`;

export const MenuContainer = styled.div`
  ${globalContainer};
  margin-inline: auto;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 567px;
  height: calc(100vh - 40px);
  padding: 32px 30px;
  background-color: #fff;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1), 0px 1px 18px rgba(0, 0, 0, 0.06),
    0px 6px 10px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  overflow: hidden;
  @media (max-width: 450px) {
    padding: 20px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  @media (max-width: 450px) {
    flex-wrap: wrap;
  }
`;

export const SearchImg = styled.div`
  background-image: url("${searchImg}");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
  width: 48px;
  height: 48px;
  margin-right: 20px;
  @media (max-width: 450px) {
    width: 32px;
    height: 32px;
    margin-right: 15px;
  }
`;

export const SearchContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  @media (max-width: 450px) {
    margin-right: 15px;
  }
`;
export const SearchContentText = styled.div`
  color: #1c1c1c;
  font-size: 20px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 16px;
`;
export const SearchContentInput = styled.input`
  width: 100%;
  color: #969696;
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 8px 40px;
  padding-right: 10px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  outline: none;
  background-image: url("${searchImg}");
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: 13px center;
  @media (max-width: 450px) {
    display: none;
  }
`;

export const SearchInputMobile = styled.input`
  width: 100%;
  color: #969696;
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 8px 40px;
  padding-right: 10px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  outline: none;
  background-image: url("${searchImg}");
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: 13px center;
  display: none;
  @media (max-width: 450px) {
    display: block;
  }
`;

export const CloseBtn = styled.button`
  width: 24px;
  height: 24px;
  background-image: url("${closeImg}");
  background-repeat: no-repeat;
  background-position: center center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

// Search results ------------

export const SearchResultsWrapper = styled.div`
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 16px;
  max-height: calc(100vh - 255px);
  overflow-y: auto;
  padding: 5px;
`;

export const SearchResultInfo = styled.div`
  color: #000;
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 10px;
  border-radius: 4px;
  margin-top: 16px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.9) 100%
    ),
    #0085ff;

  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 1.1;
  }
`;

export const SearchResultNotInfo = styled.div`
  color: #000;
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 10px;
  border-radius: 4px;
  margin-top: 16px;
  background: var(--light-yellow);
  display: none;
  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 1.1;
  }
`;
