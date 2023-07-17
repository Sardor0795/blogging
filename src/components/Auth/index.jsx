import React from "react";
import { Layer, Menu, MenuContainer, Modal } from "./style";
// import { PasswordChSuccess } from "./PasswordChSuccess";
// import { SignIn } from "./SignIn";
// import { SignUp } from "./SignUp";
// import ConfirmEmail from "./ConfirmEmail";
// import { ChangePassword } from "./ChangePassword";
import EnterCode from "./EnterCode";

function Auth({ opened, setOpened }) {
  return (
    <Layer opened={`${opened}`} onClick={() => setOpened(false)}>
      <Menu opened={`${opened}`}>
        <MenuContainer>
          <Modal onClick={(e) => e.stopPropagation()}>
            {/* <SignIn setOpened={setOpened} /> */}
            {/* <SignUp setOpened={setOpened}/> */}
            {/* <ConfirmEmail setOpened={setOpened} /> */}
            {/* <ChangePassword setOpened={setOpened}/> */}
            {/* <PasswordChSuccess setOpened={setOpened} /> */}
            <EnterCode setOpened={setOpened} />
          </Modal>
        </MenuContainer>
      </Menu>
    </Layer>
  );
}

export default Auth;
