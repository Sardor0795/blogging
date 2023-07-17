import React, { useEffect, useState } from "react";
import {
  CloseBtn,
  Container,
  Form,
  HeaderText,
  HeaderTitle,
  HeaderTitleWrap,
  InputContainer,
  Main,
  SignInBtn,
  Text,
  UserImg,
} from "./style";
import VerificationInput from "react-verification-input";

const EnterCode = ({ setOpened }) => {
  const [canResend, setCanResend] = useState(false);
  const [timer, setTimer] = useState(60);
  const [completed, setCompleted] = useState(false);
  const [code, setCode] = useState("");
  const [onError, setOnError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (timer > 0) setTimer(timer - 1);
      if (timer === 1) setCanResend(true);
    }, 1000);
  }, [timer]);

  useEffect(() => {
    setTimer(0);
  }, []);

  const handleChange = (vl) => {
    if (vl.length < 4) setCompleted(false);
  };

  const handleComplete = (vl) => {
    setCompleted(true);
    setCode(vl);
  };

  const handleSend = () => {
    console.log(code);
    if (code !== "0000") setOnError(true);
  };

  return (
    <Container>
      <Container.Header>
        <UserImg />
        <HeaderTitleWrap>
          <HeaderTitle>Elektron pochtani tasdiqlang</HeaderTitle>
          <HeaderText>
            Tasdiqlash uchun sizga 4 xonali kod yubordik elektron pochta
            manzilingiz (desx@gmail.com). Quyidagi maydonga kiriting.
          </HeaderText>
        </HeaderTitleWrap>
        <CloseBtn
          onClick={(e) => setOpened(false)}
          style={{ backgroundColor: "#fff", boxShadow: "unset" }}
        />
      </Container.Header>
      <Form>
        <Main>
          <InputContainer error={`${onError}`}>
            <VerificationInput
              length={4}
              placeholder=""
              validChars="0-9"
              autoFocus
              onFocus={() => setOnError(false)}
              onChange={handleChange}
              onComplete={handleComplete}
              classNames={{
                container: "container",
                character: "character",
                characterInactive: "character--inactive",
                characterSelected: "character--selected",
              }}
            />
          </InputContainer>
          <Text canresend={`${canResend}`}>
            Kodni olmadingizmi? <span>Qayta yuborish</span>{" "}
            {timer === 60
              ? `01:00 da tugaydi`
              : timer > 0
              ? `00:${`${timer}`.padStart(2, 0)} da tugaydi`
              : null}
          </Text>
        </Main>
        <SignInBtn onClick={handleSend} disabled={!completed} type="button">
          Kodni yuborish
        </SignInBtn>
      </Form>
    </Container>
  );
};

export default EnterCode;
