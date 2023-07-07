import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div``;

export const Desktop = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 650px) {
    width: 100%;
    max-width: 400px;
    margin-inline: auto;
    flex-direction: column;
    align-items: center;
  }
`;

export const Tablet = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;

  @media screen and (min-width: 1001px) {
    display: none;
  }
`;

export const Image = styled(Link)`
  text-decoration: none;
  width: 300px;
  height: 240px;
  background-color: #f1f1f1;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 1000px) {
    width: 250px;
    height: 200px;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    height: 240px;
  }
`;

export const RightSide = styled.div`
  padding: 5px 0 5px 20px;
  width: calc(100% - 300px);
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    width: calc(100% - 250px);
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    padding: 16px 0 0;
  }
`;

RightSide.Top = styled.div``;

RightSide.Bottom = styled.div`
  margin-top: 20px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

Top.Topic = styled(Link)`
  text-decoration: none;
  color: var(--blue);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0.56px;
  text-transform: uppercase;
`;

Top.Date = styled.p`
  color: var(--gray);
  font-size: 14px;
  line-height: 1.1;
  letter-spacing: 0.56px;
  text-transform: uppercase;
`;

export const Title = styled.div`
  margin-top: 24px;

  @media screen and (max-width: 650px) {
    margin-top: 10px;
  }
`;

Title.Link = styled(Link)`
  text-decoration: none;
  color: var(--dark-black);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  transition: 0.2s linear;

  &:hover {
    color: var(--blue);
  }

  @media screen and (max-width: 650px) {
    font-size: 20px;
  }
`;

export const Description = styled.div`
  margin-top: 16px;

  @media screen and (max-width: 650px) {
    margin-top: 10px;
  }
`;

const DescriptionStyle = css`
  text-decoration: none;
  color: #585757;
  text-overflow: ellipsis " [..]";
  font-size: 20px;
  line-height: 1.2;
  transition: 0.2s linear;

  &:hover {
    color: var(--blue);
  }

  @media screen and (max-width: 650px) {
    font-size: 16px;
  }
`;

Description.Link = styled(Link)`
  ${DescriptionStyle};

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

Description.LinkShort = styled(Link)`
  ${DescriptionStyle};

  @media screen and (min-width: 751px) {
    display: none;
  }
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 650px) {
    width: 100%;
    max-width: 400px;
    margin-inline: auto;
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }
`;

const favoritesButton = css`
  display: flex;
  gap: 3px;
  align-items: center;
  border: 1px solid #e8e8e8;
  padding: 5px 8px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.2s linear;

  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const Profile = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  white-space: nowrap;

  @media screen and (max-width: 400px) {
    flex-direction: column;
    align-items: start;
  }
`;

Profile.Container = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
`;

Profile.Img = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e8e8e8;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

Profile.Text = styled.div`
  color: var(--dark-black);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media screen and (max-width: 650px) {
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

Details.Rightside = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 5px;

    p {
      color: var(--gray);
      font-size: 13px;
      line-height: 1.1;
    }
  }
`;

Details.Button = styled.button`
  ${favoritesButton};

  @media screen and (max-width: 650px) {
    padding: 5px;
    border-radius: 4px;
  }
`;

Details.ButtonText = styled.p`
  color: var(--dark-black);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.1;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;
