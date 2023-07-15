import styled from "styled-components";

import closeImg from "../../../assets/icons/close_icon.png";
import { Link } from "react-router-dom";
import errorIcon from "../../../assets/icons/error_icon.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 100%;
  padding: 0 5px;
`;

Container.Header = styled.div`
  display: flex;
  margin-bottom: 16px;
  flex-wrap: wrap;
  @media (max-width: 410px) {
    align-items: center;
  }
`;

export const HeaderTitleWrap = styled.div`
  @media (max-width: 410px) {
    width: 100%;
    order: 2;
    margin-top: 16px;
  }
`;

export const HeaderTitle = styled.div`
  color: #1c1c1c;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 4px;
`;
export const HeaderText = styled.div`
  color: #585757;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
export const CloseBtn = styled.button`
  width: 24px;
  height: 24px;
  background-image: url("${closeImg}");
  background-repeat: no-repeat;
  background-position: center center;
  border: none;
  background-color: #fff;
  cursor: pointer;
  margin-left: auto;
`;

export const Form = styled.form`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
`;

export const InputTitle = styled.div`
  color: #585757;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 8px;
`;

export const InputText = styled.input`
  color: #969696;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  width: 100%;
  margin-bottom: 16px;
  outline: none;
  height: 40px;
`;

export const PrivacyWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const PrivacyText = styled.div`
  color: #585757;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const PrivacyLink = styled(Link)`
  margin-right: 5px;
  margin-left: 5px;
  color: #0085ff;
`;

export const SignInBtn = styled.button`
  margin-top: 24px;
  color: ${({ bgblack }) => (bgblack ? "#FFF" : "#1C1C1C")};
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 24px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  background: ${({ bgblack }) => (bgblack ? "#1C1C1C" : "#FFF")};
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.06);
  padding: 8px;
  cursor: pointer;
  transition: 0.2s linear;

  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const ErrorWrap = styled.div`
  display: ${({ display }) => (display === "none" ? "none" : "flex")};
  align-items: center;
  margin-top: -8px;
  margin-bottom: 16px;
`;
export const ErrorText = styled.div`
  color: #e92c2c;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 153.846% */
`;
export const ErrorIcon = styled.div`
  width: 16px;
  height: 16px;
  background-image: url("${errorIcon}");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  margin-right: 4px;
`;

export const PasswordRule = styled.div`
  color: #424e54;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  margin-bottom: 16px;
`;
