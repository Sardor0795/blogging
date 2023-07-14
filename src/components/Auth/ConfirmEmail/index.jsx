import React from "react";
import {
  CloseBtn,
  Container,
  Form,
  HeaderText,
  HeaderTitle,
  HeaderTitleWrap,
  InputText,
  InputTitle,
  SignInBtn,
  UserImg,
} from "./style";

const ConfirmEmail = ({ setOpened }) => {
  return (
    <Container>
      <Container.Header>
        <UserImg />
        <HeaderTitleWrap>
          <HeaderTitle>Elektron pochtani tasdiqlang</HeaderTitle>
          <HeaderText>
            Davom etish uchun elektron pochta manzilingizni tasdiqlashingiz
            kerak.
          </HeaderText>
        </HeaderTitleWrap>
        <CloseBtn
          onClick={(e) => setOpened(false)}
          style={{ backgroundColor: "#fff", boxShadow: "unset" }}
        />
      </Container.Header>
      <Form>
        <InputTitle>Email</InputTitle>
        <InputText type="email" placeholder="akbarali2000@gmail.com" />
        <SignInBtn bgblack="true" type="button">
          Kodni yuborish
        </SignInBtn>
      </Form>
    </Container>
  );
};

export default ConfirmEmail;
