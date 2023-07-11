import React from "react";
import { useState } from "react";
import {
  CloseBtn,
  Container,
  Form,
  HeaderText,
  HeaderTitle,
  HeaderTitleWrap,
  InputText,
  InputTitle,
  ParolInput,
  TypeChanger,
  UserImg,
} from "./style";

export const SignIn = ({ setOpened }) => {
  const [type, setType] = useState("text");

  const typeChange = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

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
      <Form>
        <InputTitle>Email</InputTitle>
        <InputText type="email" placeholder="akbaralikhasanov2000@gmail.com" />
        <InputTitle>Parol</InputTitle>
        <ParolInput>
          <TypeChanger type={type} onClick={typeChange} />
          <InputText type={type} placeholder="password" />
        </ParolInput>
      </Form>
    </Container>
  );
};
