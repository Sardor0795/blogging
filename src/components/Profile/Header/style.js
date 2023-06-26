import styled from "styled-components";
import { globalContainer, signUpButton } from "../../../root/global";

export const OuterContainer = styled.div``;

export const Banner = styled.div`
  height: 250px;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 800px) {
    height: 150px;
  }
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
`;

export const TopPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const Leftside = styled.div`
  display: flex;
  gap: 32px;
  align-items: flex-end;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 12px;
  }
`;

export const Image = styled.div`
  margin-top: -100px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4.444px solid #fff;
  background-color: #e5e5e5;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 800px) {
    margin-top: -50px;
    width: 100px;
    height: 100px;
  }
`;

export const Rightside = styled.div`
  padding-bottom: 4.444px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: start;

  button {
    ${signUpButton};
    display: flex;
    align-items: center;
    gap: 2px;
  }
`;

Rightside.Name = styled.h1`
  color: #000;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.1;

  @media screen and (max-width: 800px) {
    font-size: 20px;
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

  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;

Info.Number = styled.p`
  color: var(--dark-black);
  text-align: center;
  font-size: 36px;
  font-weight: 500;
  line-height: 1.1;

  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
`;

export const About = styled.p`
  margin-top: 20px;
  color: #585757;
  font-size: 16px;
  line-height: 1.5;
`;
