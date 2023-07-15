import styled from "styled-components";

import eyeimg from "../../../../assets/icons/eye_open.svg";
import eyeHideimg from "../../../../assets/icons/eye_hide.svg";

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
  color: ${({ error }) => (error === "true" ? "#E92C2C" : "#969696")};
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${({ error }) => (error === "true" ? "#E92C2C" : "#e8e8e8")};
  width: 100%;
  margin-bottom: 16px;
  outline: none;
  height: 40px;
`;

export const ParolInput = styled.div`
  position: relative;
  height: 40px;
  margin-bottom: 16px;
`;

export const TypeChanger = styled.div`
  background-image: url("${({ type }) => type === "text" ? eyeHideimg : eyeimg}");
  background-repeat: no-repeat;
  background-position: center center;
  width: 20px;
  height: 100%;
  position: absolute;
  right: 12px;
  top: 0;
  cursor: pointer;
`;
