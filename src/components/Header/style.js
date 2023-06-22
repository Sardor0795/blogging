import styled from "styled-components";
import { globalContainer, signUpButton } from "../../root/global";

export const OuterContainer = styled.div`
  background-color: var(--light-blue);
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  padding: 48px 0;
`;

export const HeaderTitle = styled.h1`
  color: #3a3a3a;
  font-size: 64px;
  font-family: Mountella;
  max-width: 824px;
  margin-bottom: 16px;
`;

export const HeaderText = styled.p`
  color: #3a3a3a;
  font-size: 20px;
  font-family: Inter;
  line-height: 28px;
  margin-bottom: 40px;
`;

export const SignUpButton = styled.button`
  ${signUpButton}
  margin-bottom: 32px;
`;

export const HashTagsWrapper = styled.div`
  display: flex;
`;

export const HashTag = styled.span`
  color: #1c1c1c;
  font-size: 16px;
  font-family: Inter;
  line-height: 24px;
  &:not(:last-child) {
    margin-right: 24px;
  }
  margin-bottom: 36px;
`;

export const MoreContentLink = styled.a`
  color: #0085ff;
  text-align: center;
  font-size: 16px;
  font-family: Inter;
  line-height: 24px;
`;
