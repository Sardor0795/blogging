import styled from "styled-components";
import { globalContainer } from "./../../../root/global";
import bgImg from "../../../assets/images/header_bg.svg";

export const OuterContainer = styled.div`
  padding-block: 150px;
  background-color: var(--light-yellow);
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-position: right top;

  @media screen and (max-width: 500px) {
    background-size: contain;
    background-position: right bottom;
  }
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FormGroup = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;

  input {
    width: 100%;
    padding: 12px 40px 12px 45px;
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #e8e8e8;
    background: #fff;
    outline: none;
    color: var(--dark-black);
    font-size: 20px;
    line-height: 1.1;
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 100%;
  }
`;

export const Search = styled.div`
  width: 24px;

  svg {
    width: 100%;
  }
`;

export const Recommendation = styled.div`
  color: #585757;
  font-size: 16px;
  line-height: 1.1;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

Recommendation.Items = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

Recommendation.Item = styled.div`
  /* cursor: pointer; */
  transition: 0.2s linear;
  text-decoration: underline solid transparent 1px;

  /* &:hover {
    text-decoration-color: #585757;
  } */
`;
