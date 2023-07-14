import styled from "styled-components";

import userImg from "../../../assets/images/user_img.png";
import closeImg from "../../../assets/icons/close_icon.png";
import { Link } from "react-router-dom";
import checkedImg from "../../../assets/icons/checked.png";
import googleImg from "../../../assets/icons/google.png";
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
`;

export const UserImg = styled.div`
  background-image: url("${userImg}");
  background-repeat: no-repeat;
  background-position: center center;
  width: 48px;
  height: 48px;
  margin-right: 20px;
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
  max-width: 407px;
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

export const PrivacyCheckBox = styled.div`
  max-width: 20px;
  width: 100%;
  height: 20px;
  margin-right: 8px;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  cursor: pointer;
  background-image: url("${({ checked }) => (checked ? checkedImg : null)}");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
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

export const SignInBtn = styled.div`
  margin-bottom: 16px;
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

export const GoogleIcon = styled.div`
  background-image: url("${googleImg}");
  background-repeat: no-repeat;
  background-position: center center;
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export const Line = styled.div`
  width: 100%;
  border-top: 1px solid #e8e8e8;
  margin-bottom: 16px;
`;

export const Text = styled.div`
  color: #585757;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  text-align: center;
  margin-bottom: 8px;
`;

export const SignUpLink = styled(Link)`
  color: #0085ff;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  display: inline-block;
  margin: 0 auto;
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
