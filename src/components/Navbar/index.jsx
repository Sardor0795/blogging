import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AuthorizedNavbar from "./AuthorizedNavbar";
import UnauthorizedNavbar from "./UnauthorizedNavbar";

function Navbar() {
  const [auth] = useState(false);

  return (
    <>
      {auth ? <AuthorizedNavbar /> : <UnauthorizedNavbar />}
      <Outlet />
    </>
  );
}

export default Navbar;
