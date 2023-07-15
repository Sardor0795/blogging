import React from "react";
import { Line, PasswordRule, SuccessIcon, SuccessIconWrap } from "./style";
import {
  CloseBtn,
  Container,
  Form,
  HeaderTitle,
  HeaderTitleWrap,
  SignInBtn,
} from "./style";

export const PasswordChSuccess = ({ setOpened }) => {
  return (
    <Container>
      <Container.Header>
        <HeaderTitleWrap>
          <HeaderTitle>Parol yangilandi!</HeaderTitle>
        </HeaderTitleWrap>
        <CloseBtn
          onClick={(e) => setOpened(false)}
          style={{ backgroundColor: "#fff", boxShadow: "unset" }}
        />
      </Container.Header>

      <SuccessIconWrap>
        <SuccessIcon />
      </SuccessIconWrap>

      <PasswordRule>
        Parolingiz muvaffaqiyatli yangilandi! Hisobingiz xavfsizligini
        ta'minlash uchun siz yangilangan hisob ma'lumotlaringiz bilan ilovaga
        qayta kirishingiz kerak bo'ladi.
        <br />
        <br />
        Biz pxblue@eaton.com manziliga tasdiqlovchi xat yubordik
      </PasswordRule>
      <Line />
      <Form>
        <SignInBtn bgblack="true" type="button">
          Kirish sahifasiga qaytish
        </SignInBtn>
      </Form>
    </Container>
  );
};
