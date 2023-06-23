import styled from "styled-components";
import { globalContainer, signUpButton } from "../../root/global";

export const OuterContainer = styled.div`
  min-height: 100vh;
  padding-block: 30px 80px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const Leftside = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 15px;

  button {
    ${signUpButton}
    margin-top: 50px;
    padding-block: 10px;
    padding-inline: 18px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const Title = styled.h2`
  color: #000;
  font-size: 40px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
`;

export const MainTitle = styled.h1`
  color: #000;
  font-size: 32px;
  font-family: Roboto, sans-serif;
  font-weight: 500;
`;

export const Description = styled.p`
  margin-top: 3px;
  color: #4b4b4b;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  line-height: 1.1;
  letter-spacing: 0.64px;
`;

export const Rightside = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 500px;

  img {
    width: 100%;
  }
`;
