import styled, { css } from "styled-components";
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

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 16px;
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

  @media screen and (max-width: 500px) {
    max-width: 100%;
  }
`;

export const HeaderTitle = styled.div`
  color: #1c1c1c;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 4px;
`;
export const HeaderText = styled.div`
  color: #585757;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
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

  @media screen and (max-width: 500px) {
    top: 10px;
  }
`;

export const Form = styled.form`
  max-width: 407px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  padding-block: 35px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: 400px) {
    padding-block: 15px 30px;
    gap: 30px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 11px;

  .character {
    width: 60px;
    height: 70px;
    border-radius: 8px;
    background: #fff;
    border: 1px solid
      ${({ error }) => (error === "true" ? "#e92c2c" : "#d9d9d9")};
    color: ${({ error }) =>
      error === "true" ? "#e92c2c" : "var(--dark-black)"};
    text-align: center;
    font-size: 24px;
    line-height: 1.3;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.15s linear;
  }
  .character--selected {
    border: 1px solid var(--blue);
  }
`;

export const Text = styled.div`
  width: 100%;
  max-width: 280px;
  color: #000;
  text-align: center;
  font-size: 14px;
  line-height: normal;

  span {
    color: var(--blue);
    cursor: ${({ canresend }) =>
      canresend === "true" ? "pointer" : "not-allowed"};
  }
`;

export const SignInBtn = styled.button`
  margin-bottom: 16px;
  color: #fff;
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
  background: #1c1c1c;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.06);
  padding: 8px;
  cursor: ${({ disabled }) => (!disabled ? "pointer" : "not-allowed")};
  transition: 0.2s linear;

  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        transform: translateY(-1px);
      }
      &:active {
        transform: translateY(0);
      }
    `}
`;
