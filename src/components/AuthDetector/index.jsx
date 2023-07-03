import React, { useState, useEffect } from "react";
import Loader from "../Loader";

function AuthDetector({ auth: authCom, noauth: noAuthCom }) {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    setAuth(true);
  }, []);

  return auth === true ? authCom : auth === false ? noAuthCom : <Loader />;
}

export default AuthDetector;
