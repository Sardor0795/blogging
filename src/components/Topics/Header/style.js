import styled from "styled-components";
import { globalContainer } from "./../../../root/global";
import bgImg from "../../../assets/images/header_bg.svg";
import { Link } from "react-router-dom";

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

export const Results = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  max-height: 350px;
  overflow-y: auto;
  padding: 12px 40px 12px 45px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-size: 18px;
  color: #585757;
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: 0.2s linear;
  visibility: ${({ visible }) => (visible === "true" ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible === "true" ? 1 : 0)};
`;

export const Result = styled.div``;

Result.Link = styled(Link)`
  text-decoration: none;
  color: #585757;
  transition: 0.2s linear;
  text-decoration: underline solid transparent 1.5px;

  &:hover {
    text-decoration-color: #585757;
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
  justify-content: center;
  gap: 10px 16px;
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

  &:hover {
    text-decoration-color: #585757;
  }
`;
