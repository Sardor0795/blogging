import styled from "styled-components";

import userImg from "../../../assets/images/user_img.png";
import closeImg from "../../../assets/icons/close_icon.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 100%;
  padding: 0 5px;
  position: relative;
`;

Container.Header = styled.div`
  display: flex;
  margin-bottom: 16px;
  flex-wrap: wrap;
  @media (max-width: 410px) {
    align-items: center;
  }
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
  max-width: calc(100% - 78px);
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
  position: absolute;
  top: 0;
  right: 0;
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
  color: var(--dark-black);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  width: 100%;
  margin-bottom: 16px;
  outline: none;
  height: 40px;
`;

export const SignInBtn = styled.button`
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
