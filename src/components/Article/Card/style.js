import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const Image = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 216px;
  background-color: lightgray;
  background-color: #f1f1f1;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Content = styled.div`
  padding: 16px;

  @media screen and (max-width: 950px) {
    padding: 16px 0;
  }
`;

export const TopPart = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

TopPart.Topic = styled(Link)`
  text-decoration: none;
  color: var(--blue);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0.56px;
  text-transform: uppercase;
`;

TopPart.Date = styled(Link)`
  color: var(--gray);
  font-size: 14px;
  line-height: 1.1;
  letter-spacing: 0.56px;
  text-transform: uppercase;
`;

export const Title = styled.p`
  margin-top: 24px;
`;

Title.Link = styled(Link)`
  color: var(--dark-black);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.1;
  transition: 0.2s linear;

  &:hover {
    color: var(--blue);
  }
`;

export const Description = styled.p`
  margin-top: 16px;
`;

Description.Link = styled(Link)`
  text-decoration: none;
  color: #585757;
  font-size: 16px;
  line-height: 1.1;
  transition: 0.2s linear;

  &:hover {
    color: var(--blue);
  }
`;

export const Details = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: space-between;
`;

export const Profile = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
`;

Profile.Image = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #e8e8e8;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

Profile.Name = styled.div`
  color: var(--dark-black);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
`;

Details.Rightside = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  color: var(--gray);
  font-size: 13px;
  line-height: 1.1;
`;

export const Bottom = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 4px 8px;
    border-radius: 8px;
    border: 1px solid #e8e8e8;
    background: #fff;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 3px;
    color: var(--dark-black);
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.1;
    transition: 0.2s linear;

    &:hover {
      transform: translateY(-1px);
    }
    &:active {
      transform: translateY(0);
    }
  }
`;
