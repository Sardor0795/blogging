import React from "react";
import { Container, HashTag, HashTagsWrapper, HeaderText, HeaderTitle, MoreContentLink, MoreLinkIcon, OuterContainer, SignUpButton } from "./style";

function Header() {
  return (
    <OuterContainer>
      <Container>
        <HeaderTitle>
          Bizning maqsadimiz oʻzbek ilmiy kontentini boyitish
        </HeaderTitle>
        <HeaderText>
          Bilimingizni maqolalarda ulashing va hamjamiyatni kengaytiring
        </HeaderText>
        <SignUpButton>Hamjamiyatga qo’shiling</SignUpButton>
        <HashTagsWrapper>
          <HashTag>#dolzarb</HashTag>
          <HashTag>#ta’lim</HashTag>
          <HashTag>#iqtisodiyot</HashTag>
          <HashTag>#madaniyat</HashTag>
          <HashTag>#texnologiya</HashTag>
          <HashTag>#san’at</HashTag>
        </HashTagsWrapper>
        <MoreContentLink href="#">ko‘proq mavzularni ko‘rish
        <MoreLinkIcon/>
        </MoreContentLink>
      </Container>
    </OuterContainer>
  );
}

export default Header;
