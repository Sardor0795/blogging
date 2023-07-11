import React from "react";
import {
  CloseBtn,
  Container,
  HeaderText,
  HeaderTitle,
  HeaderTitleWrap,
  UserImg,
} from "./style";

export const SignIn = ({ setOpened }) => {
  return (
    <Container>
      <Container.Header>
        <UserImg />
        <HeaderTitleWrap>
          <HeaderTitle>Kirish</HeaderTitle>
          <HeaderText>Bilim ulashish har doim yaxshi</HeaderText>
        </HeaderTitleWrap>
        <CloseBtn
          onClick={(e) => setOpened(false)}
          style={{ backgroundColor: "#fff", boxShadow: "unset" }}
        />
      </Container.Header>
    </Container>
  );
};
