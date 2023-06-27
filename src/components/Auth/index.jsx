import React from "react";
import { Layer, Menu, MenuContainer, Modal } from "./style";

function Auth({ opened, setOpened }) {
  return (
    <Layer opened={`${opened}`} onClick={(e) => setOpened(false)}>
      <Menu opened={`${opened}`}>
        <MenuContainer>
          <Modal onClick={(e) => e.stopPropagation()}>signup&signin</Modal>
        </MenuContainer>
      </Menu>
    </Layer>
  );
}

export default Auth;
