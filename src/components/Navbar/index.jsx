import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import AuthorizedNavbar from "./AuthorizedNavbar";
import UnauthorizedNavbar from "./UnauthorizedNavbar";

function Navbar({ yellowbg, fixed }) {
  const [auth, setAuth] = useState("loading");

  useEffect(() => {
    setAuth(true);
  }, []);

  return (
    <>
      {auth === "loading" ? null : auth === true ? (
        <AuthorizedNavbar />
      ) : auth === false ? (
        <UnauthorizedNavbar yellowbg={yellowbg} fixed={fixed} />
      ) : null}
      <Outlet />
    </>
  );
}

export default Navbar;
