import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AuthorizedNavbar from "./AuthorizedNavbar";
import UnauthorizedNavbar from "./UnauthorizedNavbar";

function Navbar({ yellowbg, fixed }) {
  const [auth] = useState(false);

  return (
    <>
      {auth ? (
        <AuthorizedNavbar />
      ) : (
        <UnauthorizedNavbar yellowbg={yellowbg} fixed={fixed} />
      )}
      <Outlet />
    </>
  );
}

export default Navbar;
