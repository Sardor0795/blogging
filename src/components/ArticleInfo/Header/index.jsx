import React, { useState } from "react";
import { Container, HeaderTitle, OuterContainer } from "./style";
import Auth from "../../Auth";

function Header() {
  const [authOpened, setAuthOpened] = useState(false);

  return (
    <>
      <OuterContainer>
        <Container>
          <HeaderTitle>
            ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
          </HeaderTitle>
        </Container>
      </OuterContainer>
      <Auth opened={authOpened} setOpened={setAuthOpened} />
    </>
  );
}

export default Header;
