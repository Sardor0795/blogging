import React from "react";
import { useState } from "react";
import { ErrorIcon, ErrorText, ErrorWrap } from "./style";
import { PasswordInput } from "./PasswordInput";
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
  PrivacyCheckBox,
  PrivacyLink,
  PrivacyText,
  PrivacyWrap,
  SignInBtn,
  SignUpLink,
  Text,
  UserImg,
} from "./style";

export const SignUp = ({ setOpened }) => {
  const [checked, setChecked] = useState(false);

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
        <InputTitle>F.I.O</InputTitle>
        <InputText type="text" placeholder="F.I.O kiriting" />
        <InputTitle>F.I.O</InputTitle>
        <InputText type="text" placeholder="F.I.O kiriting" />
        <PasswordInput />

        <ErrorWrap display="none">
          <ErrorIcon />
          <ErrorText>Error Alert</ErrorText>
        </ErrorWrap>

        <PasswordInput error="true" />

        <ErrorWrap>
          <ErrorIcon />
          <ErrorText>Error Alert</ErrorText>
        </ErrorWrap>
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
        <SignInBtn type="button">
          <GoogleIcon />
          Kirish
        </SignInBtn>
        <SignInBtn bgblack="true" type="button">
          Kirish
        </SignInBtn>
        <Line />
        <Text>Sizda hisob mavjud emasmi?</Text>
        <SignUpLink>Ro‘yxatdan o‘tish</SignUpLink>
      </Form>
    </Container>
  );
};
