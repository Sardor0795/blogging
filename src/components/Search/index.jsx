import React from "react";
import { Layer, Menu, MenuContainer, Modal } from "./style";

function Search({ opened, setOpened }) {
  return (
    <Layer opened={`${opened}`} onClick={(e) => setOpened(false)}>
      <Menu opened={`${opened}`}>
        <MenuContainer>
          <Modal onClick={(e) => e.stopPropagation()}>search</Modal>
        </MenuContainer>
      </Menu>
    </Layer>
  );
}

export default Search;
