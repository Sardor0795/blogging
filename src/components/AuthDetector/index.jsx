import React, { useState, useEffect } from "react";
import Loader from "../Loader";

function AuthDetector({ auth: authCom, noauth: noAuthCom }) {
  const [auth, setAuth] = useState("loading");

  useEffect(() => {
    setAuth(true);
  }, []);

  return auth === "loading" ? (
    <Loader />
  ) : auth === true ? (
    authCom
  ) : auth === false ? (
    noAuthCom
  ) : null;
}

export default AuthDetector;
