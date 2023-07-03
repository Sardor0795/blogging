import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import AuthorizedNavbar from "./AuthorizedNavbar";
import UnauthorizedNavbar from "./UnauthorizedNavbar";

function Navbar({ yellowbg, fixed }) {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    setAuth(true);
  }, []);

  return (
    <>
      {auth === true ? (
        <AuthorizedNavbar />
      ) : auth === false ? (
        <UnauthorizedNavbar yellowbg={yellowbg} fixed={fixed} />
      ) : (
        <></>
      )}
      <Outlet />
    </>
  );
}

export default Navbar;
