import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AuthorizedNavbar from "./AuthorizedNavbar";
import UnauthorizedNavbar from "./UnauthorizedNavbar";

function Navbar({yellowbg}) {
  const [auth] = useState(false);

  return (
    <>
      {auth ? <AuthorizedNavbar yellowbg={yellowbg} /> : <UnauthorizedNavbar yellowbg={yellowbg} />}
      <Outlet />
    </>
  );
}

export default Navbar;
