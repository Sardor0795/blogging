import styled from "styled-components";

import closeImg from "../../../assets/icons/close_icon.png";
import { Link } from "react-router-dom";
import successIcon from "../../../assets/icons/success_icon.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 100%;
  padding: 0 5px;
`;

Container.Header = styled.div`
  display: flex;
  margin-bottom: 24px;
  flex-wrap: wrap;
  @media (max-width: 410px) {
    align-items: center;
  }
`;

export const HeaderTitleWrap = styled.div``;

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

export const PasswordRule = styled.div`
  color: #424e54;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  margin-bottom: 150px;
`;

export const SuccessIconWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

export const SuccessIcon = styled.div`
  width: 96px;
  height: 96px;
  background-image: url("${successIcon}");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

export const Line = styled.div`
  width: 100%;
  border-top: 1px solid #e8e8e8;
`;
