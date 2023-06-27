import styled from "styled-components";
import { globalContainer, signUpButton } from "./../../../root/global";

export const OuterContainer = styled.div`
  padding-block: 40px;
  background-color: #fff;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  display: flex;
  gap: 36px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Leftside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

export const Icon = styled.div`
  width: 28px;
  height: 28px;
  background: #ededed;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #292929;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.462px;

  @media screen and (max-width: 900px) {
    font-size: 36px;
  }
  @media screen and (max-width: 500px) {
    font-size: 22px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;

  button {
    ${signUpButton}
  }
`;

export const Rightside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 32px;
  justify-content: flex-end;

  @media screen and (max-width: 900px) {
    justify-content: flex-start;
  }
`;

Info.Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

Info.Title = styled.p`
  color: var(--gray);
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.1;
`;

Info.Number = styled.p`
  color: var(--dark-black);
  text-align: center;
  font-size: 36px;
  font-weight: 500;
  line-height: 1.1;
`;

export const Subscribers = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 900px) {
    justify-content: flex-start;
    padding-left: 12px;
  }
`;

export const Subscriber = styled.div`
  width: 36px;
  height: 36px;
  border: 2px solid #fff;
  border-radius: 50%;
  background: url(${({ url }) => url}), lightgray 50% / cover no-repeat;
  margin-left: -12px;
`;
