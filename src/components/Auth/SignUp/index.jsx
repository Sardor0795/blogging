import React from "react";
import { useState } from "react";
import axios from "axios";

import {
  ErrorIcon,
  ErrorText,
  ErrorWrap,
  ParolInput,
  TypeChanger,
} from "./style";
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
import { useRef } from "react";
import { useEffect } from "react";
import { mainUrl } from "../../../utils/api";

export const SignUp = ({ setOpened }) => {
  const [checked, setChecked] = useState(false);
  const [type, setType] = useState("text");
  const [typeTwo, setTypeTwo] = useState("text");

  const [password, setPassword] = useState("");
  const [confirmPass, setconfirmPass] = useState(true);

  const [confirmPassValue, setConfirmPassValue] = useState("");

  const typeChange = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

  const typeChangeTwo = () => {
    if (typeTwo === "text") {
      setTypeTwo("password");
    } else {
      setTypeTwo("text");
    }
  };

  let nameRef = useRef("");
  let lastNameRef = useRef("");
  let usernameRef = useRef("");
  let emailRef = useRef("");

  const getValues = () => {
    let obj = {
      name: nameRef.current.value,
      lastname: lastNameRef.current.value,
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password,
      confirmPassValue,
      privacyCheck: checked,
    };
    console.log(obj);
    // let n = JSON.stringify(obj);
    // console.log(n);
    // axios
    //   .post(`${mainUrl}/users/auth/signup`, n)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };

  const checkConfirmPassword = (e) => {
    setConfirmPassValue(e.target.value);
  };

  useEffect(() => {
    if (confirmPassValue === password || confirmPassValue === "") {
      setconfirmPass(true);
    } else {
      setconfirmPass(false);
    } // eslint-disable-next-line
  }, [confirmPassValue]);
  return (
    <Container>
      <Container.Header>
        <UserImg />
        <HeaderTitleWrap>
          <HeaderTitle>Ro‘yhatdan o‘tish</HeaderTitle>
          <HeaderText>Bilim ulashish har doim yaxshi</HeaderText>
        </HeaderTitleWrap>
        <CloseBtn
          onClick={(e) => setOpened(false)}
          style={{ backgroundColor: "#fff", boxShadow: "unset" }}
        />
      </Container.Header>
      <Form name="form">
        <InputTitle>Ism</InputTitle>
        <InputText
          name="name"
          ref={nameRef}
          type="text"
          placeholder="Ismingizni kiriting"
        />
        <InputTitle>Familiya</InputTitle>
        <InputText
          name="lastname"
          ref={lastNameRef}
          type="text"
          placeholder="Familiyangizni kiriting"
        />
        <InputTitle>Foydalanuvchi nomi</InputTitle>
        <InputText
          name="username"
          ref={usernameRef}
          type="text"
          placeholder="Foydalanuvchi nomi yarating"
        />
        <InputTitle>Email</InputTitle>

        <InputText
          ref={emailRef}
          name="email"
          type="email"
          placeholder="Email kiriting"
        />

        <InputTitle>Parol yarating</InputTitle>
        <ParolInput>
          <TypeChanger type={type} onClick={typeChange} />
          <InputText
            name="password"
            type={type}
            placeholder="Parol"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
        </ParolInput>

        <ErrorWrap display="none">
          <ErrorIcon />
          <ErrorText>Error Alert</ErrorText>
        </ErrorWrap>

        {/* <PasswordInput text="Parolni tasdiqlash" error="false" /> */}

        <InputTitle>Parolni tasdiqlash</InputTitle>
        <ParolInput>
          <TypeChanger type={typeTwo} onClick={typeChangeTwo} />
          <InputText
            name="password"
            type={typeTwo}
            placeholder="Parol"
            value={confirmPassValue}
            onInput={(e) => checkConfirmPassword(e)}
          />
        </ParolInput>

        <ErrorWrap display={confirmPass ? "none" : "block"}>
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
          Ro‘yhatdan o‘tish
        </SignInBtn>
        <SignInBtn onClick={getValues} bgblack="true" type="button">
          Ro‘yhatdan o‘tish
        </SignInBtn>
        <Line />
        <Text>Sizda hisob mavjud emasmi?</Text>
        <SignUpLink>Ro‘yxatdan o‘tish</SignUpLink>
      </Form>
    </Container>
  );
};
