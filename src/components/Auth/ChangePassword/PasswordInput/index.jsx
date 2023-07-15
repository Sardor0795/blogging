import React from "react";
import { useState } from "react";
import { InputText, InputTitle, TypeChanger } from "./style";
import { ParolInput } from "./style";

export const PasswordInput = ({error, title}) => {
  const [type, setType] = useState("text");

  const typeChange = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };
  return (
    <>
      <InputTitle>{title}</InputTitle>
      <ParolInput>
        <TypeChanger type={type} onClick={typeChange} />
        <InputText error={error} type={type} placeholder="password" />
      </ParolInput>
    </>
  );
};
