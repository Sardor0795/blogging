import React from "react";
import { useState } from "react";
import {
  CloseBtn,
  Container,
  Form,
  GoogleIcon,
  HeaderText,
  HeaderTitle,
  HeaderTitleWrap,
  InputText,
  InputTitle,
  Line,
  ParolInput,
  PrivacyCheckBox,
  PrivacyLink,
  PrivacyText,
  PrivacyWrap,
  SignInBtn,
  SignUpLink,
  Text,
  TypeChanger,
  UserImg,
} from "./style";

export const SignIn = ({ setOpened }) => {
  const [type, setType] = useState("text");
  const [checked, setChecked] = useState(false);

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
        <InputText type="email" placeholder="akbarali2000@gmail.com" />
        <InputTitle>Parol</InputTitle>
        <ParolInput>
          <TypeChanger type={type} onClick={typeChange} />
          <InputText type={type} placeholder="password" />
        </ParolInput>
        <PrivacyWrap>
          <PrivacyCheckBox
            onClick={() => setChecked(!checked)}
            checked={checked}
          />
          <PrivacyText>
            Ro’yhatdan o’tish tugmasini bosish orqali men
            <PrivacyLink to="/privacy">sayt maxfiylik</PrivacyLink>
            siyosatiga rozilik bildiraman.
          </PrivacyText>
        </PrivacyWrap>
        <SignInBtn>
          <GoogleIcon /> Kirish
        </SignInBtn>
        <SignInBtn bgblack="true">Kirish</SignInBtn>
        <Line />
        <Text>Sizda hisob mavjud emasmi?</Text>
        <SignUpLink>Ro‘yxatdan o‘tish</SignUpLink>
      </Form>
    </Container>
  );
};
