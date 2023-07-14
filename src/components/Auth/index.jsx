import React from "react";
// import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Layer, Menu, MenuContainer, Modal } from "./style";

function Auth({ opened, setOpened }) {
  return (
    <Layer opened={`${opened}`} onClick={(e) => setOpened(false)}>
      <Menu opened={`${opened}`}>
        <MenuContainer>
          <Modal onClick={(e) => e.stopPropagation()}>
            {/* <SignIn setOpened={setOpened} /> */}
            <SignUp/>
          </Modal>
        </MenuContainer>
      </Menu>
    </Layer>
  );
}

export default Auth;
