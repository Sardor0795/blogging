import React, { useState } from "react";
import {
  Container,
  HeaderText,
  HeaderTitle,
  OuterContainer,
} from "./style";
import Auth from "../../Auth";

function Header() {
  const [authOpened, setAuthOpened] = useState(false);

  return (
    <>
      <OuterContainer>
        <Container>
          <HeaderTitle>
          O‘zbek ma’naviy boy davlat, ammo internet kontenti-chi?
          </HeaderTitle>
          <HeaderText>
          Bizning maqsadimiz mana shu bo’shliqni to’ldirishga urinish va yosh auditoriya yordamida bunga erishish.
          </HeaderText>
        </Container>
      </OuterContainer>
      <Auth opened={authOpened} setOpened={setAuthOpened} />
    </>
  );
}

export default Header;
