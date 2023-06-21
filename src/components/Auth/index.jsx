import React from "react";
import { Layer, Menu, MenuContainer, Modal } from "./style";

function Auth({ opened, setOpened }) {
  return (
    <Layer opened={`${opened}`} onClick={(e) => setOpened(false)}>
      <Menu opened={`${opened}`} onClick={(e) => e.stopPropagation()}>
        <MenuContainer>
          <Modal>signup&signin</Modal>
        </MenuContainer>
      </Menu>
    </Layer>
  );
}

export default Auth;
