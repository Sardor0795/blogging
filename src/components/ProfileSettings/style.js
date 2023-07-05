import styled from "styled-components";
import { globalContainer, signUpButton } from "../../root/global";

export const OuterContainer = styled.div`
  min-height: 100vh;
  background-color: #fff;
  padding-bottom: 180px;
`;

export const Banner = styled.div`
  position: relative;
  z-index: 2;
  height: 250px;

  @media screen and (max-width: 800px) {
    height: 150px;
  }
`;

export const BannerInside = styled.div`
  height: 100%;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const BannerContainer = styled.div`
  ${globalContainer};
  margin-inline: auto;
  position: relative;
`;

export const BannerAbsolute = styled.div`
  position: absolute;
  right: 0;
  bottom: 20px;
`;

export const Button = styled.div`
  position: relative;

  input {
    visibility: hidden;
  }

  label {
    position: absolute;
    top: 0;
    right: ${({ position }) => (position === "right" ? 0 : "auto")};
    left: ${({ position }) => (position === "left" ? 0 : "auto")};
    border-radius: 8px;
    border: 1px solid #e8e8e8;
    background: #fff;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.06);
    padding: 4px 8px;
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    transition: .2s linear;

    &:hover {
      transform: translateY(-2px);
    }
    &:active {
      transform: translateY(0);
    }
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
  z-index: 3;
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

export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Row = styled.div`
  display: flex;
  gap: 66px;

  button {
    ${signUpButton}
    display: flex;
    gap: 8px;
    align-items: center;
  }

  @media screen and (max-width: 700px) {
    gap: 32px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  max-width: ${({ little }) => (little === "true" ? "340px" : "515px")};
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: #585757;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
  }

  input,
  textarea {
    padding: 8px 12px;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    background: #fff;
    outline: none;
    resize: none;
    color: var(--dark-black);
    font-family: "Inter";
    font-size: 16px;
    font-style: normal;
    line-height: 1.2;
  }

  @media screen and (max-width: 700px) {
    max-width: 450px;
  }
`;
