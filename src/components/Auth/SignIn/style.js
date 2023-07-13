import styled from "styled-components";

import userImg from "../../../assets/images/user_img.png";
import closeImg from "../../../assets/icons/close_icon.png";
import eyeimg from "../../../assets/icons/eye.png";
import eyeHideimg from "../../../assets/icons/eye_hide.svg";
import { Link } from "react-router-dom";
import checkedImg from '../../../assets/icons/checked.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

Container.Header = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const UserImg = styled.div`
  background-image: url("${userImg}");
  background-repeat: no-repeat;
  background-position: center center;
  width: 48px;
  height: 48px;
  margin-right: 20px;
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
  max-width: 407px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
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

// ParolInput ------

export const ParolInput = styled.div`
  position: relative;
  height: 40px;
  margin-bottom: 16px;
`;

export const TypeChanger = styled.div`
  background-image: url("${({ type }) => type === "text" ? eyeimg : eyeHideimg}");
  background-repeat: no-repeat;
  background-position: center center;
  width: 20px;
  height: 100%;
  position: absolute;
  right: 12px;
  top: 0;
  cursor: pointer;
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
  background-image: url('${({checked}) => checked ? checkedImg : null}');
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
  color: #0085FF;
`;
