import React from "react";
import { Layer, Menu, MenuContainer, Modal } from "./style";
// import { SignIn } from "./SignIn";
// import { SignUp } from "./SignUp";
// import ConfirmEmail from "./ConfirmEmail";
import { ChangePassword } from "./ChangePassword";

function Auth({ opened, setOpened }) {
  return (
    <Layer opened={`${opened}`} onClick={() => setOpened(false)}>
      <Menu opened={`${opened}`}>
        <MenuContainer>
          <Modal onClick={(e) => e.stopPropagation()}>
            {/* <SignIn setOpened={setOpened} /> */}
            {/* <SignUp setOpened={setOpened}/> */}
            {/* <ConfirmEmail setOpened={setOpened} /> */}
            <ChangePassword setOpened={setOpened}/>
          </Modal>
        </MenuContainer>
      </Menu>
    </Layer>
  );
}

export default Auth;
