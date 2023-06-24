import React, { useState } from "react";
import {
  Container,
  HashTag,
  HashTagsWrapper,
  HeaderText,
  HeaderTitle,
  MoreContentLink,
  MoreLinkIcon,
  OuterContainer,
  SignUpButton,
} from "./style";
import Auth from "../../Auth";
import { toTop } from "./../../../utils/toTop";

function Header() {
  const [authOpened, setAuthOpened] = useState(false);

  return (
    <>
      <OuterContainer>
        <Container>
          <HeaderTitle>
            Bizning maqsadimiz oʻzbek ilmiy kontentini boyitish
          </HeaderTitle>
          <HeaderText>
            Bilimingizni maqolalarda ulashing va hamjamiyatni kengaytiring
          </HeaderText>
          <SignUpButton
            onClick={() => setAuthOpened(true)}
            type="button"
            aria-label="Hamjamiyatga qo’shiling"
          >
            Hamjamiyatga qo’shiling
          </SignUpButton>
          <HashTagsWrapper>
            <HashTag
              to="/topics/dolzarb"
              aria-label="dolzarb mavzusidagi maqolalarni ko‘ring"
            >
              #dolzarb
            </HashTag>
            <HashTag
              to="/topics/ta’lim"
              aria-label="ta’lim mavzusidagi maqolalarni ko‘ring"
            >
              #ta’lim
            </HashTag>
            <HashTag
              to="/topics/iqtisodiyot"
              aria-label="iqtisodiyot mavzusidagi maqolalarni ko‘ring"
            >
              #iqtisodiyot
            </HashTag>
            <HashTag
              to="/topics/madaniyat"
              aria-label="madaniyat mavzusidagi maqolalarni ko‘ring"
            >
              #madaniyat
            </HashTag>
            <HashTag
              to="/topics/texnologiya"
              aria-label="texnologiya mavzusidagi maqolalarni ko‘ring"
            >
              #texnologiya
            </HashTag>
            <HashTag
              to="/topics/san’at"
              aria-label="san’at mavzusidagi maqolalarni ko‘ring"
            >
              #san’at
            </HashTag>
          </HashTagsWrapper>
          <MoreContentLink
            onClick={toTop}
            to="/topics"
            aria-label="ko‘proq mavzularni ko‘rish"
          >
            ko‘proq mavzularni ko‘rish
            <MoreLinkIcon />
          </MoreContentLink>
        </Container>
      </OuterContainer>
      <Auth opened={authOpened} setOpened={setAuthOpened} />
    </>
  );
}

export default Header;
