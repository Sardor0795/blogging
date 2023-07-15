import React from "react";
import { ErrorIcon, ErrorText, ErrorWrap, PasswordRule } from "./style";
import { PasswordInput } from "./PasswordInput";
import {
  CloseBtn,
  Container,
  Form,
  HeaderTitle,
  HeaderTitleWrap,
  SignInBtn,
} from "./style";

export const ChangePassword = ({ setOpened }) => {
  return (
    <Container>
      <Container.Header>
        <HeaderTitleWrap>
          <HeaderTitle>Parolni o'zgartirish</HeaderTitle>
        </HeaderTitleWrap>
        <CloseBtn
          onClick={(e) => setOpened(false)}
          style={{ backgroundColor: "#fff", boxShadow: "unset" }}
        />
      </Container.Header>

      <PasswordRule>
        Parol kamida 8 ta belgidan iborat bo'lishi kerak, kamida bitta katta,
        bitta kichik, bitta raqam va bitta maxsus belgidan iborat bo'lishi
        kerak.
      </PasswordRule>

      <Form>
        <PasswordInput />

        <ErrorWrap display="none">
          <ErrorIcon />
          <ErrorText>Error Alert</ErrorText>
        </ErrorWrap>

        <PasswordInput /* error="true" */ />

        <ErrorWrap display="none">
          <ErrorIcon />
          <ErrorText>Error Alert</ErrorText>
        </ErrorWrap>

        <SignInBtn bgblack="true" type="button">
          Yuborish
        </SignInBtn>
      </Form>
    </Container>
  );
};
