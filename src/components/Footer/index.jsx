import React from "react";
import {
  OuterContainer,
  Container,
  FooterLogo,
  Content,
  ContentLinks,
  ContentLink,
  ContentText,
  ContentCopyright,
  Socials,
  SocialMedias,
  SocialMedia,
  FaceBookIcon,
  YouTubeIcon,
  TwitterIcon,
  Downloads,
  DownloadAppStore,
  DownloadPlayMarket,
  LogoLinkWrapper,
} from "./style";

function Footer() {
  return (
    <OuterContainer>
      <Container>
        <LogoLinkWrapper>
          <FooterLogo />
        </LogoLinkWrapper>
        <Content>
          <ContentLinks>
            <ContentLink>Loyiha haqida</ContentLink>
            <ContentLink>Yordam</ContentLink>
            <ContentLink>Foydalanish shartlari</ContentLink>
            <ContentLink>Maxfiylik siyosati</ContentLink>
          </ContentLinks>
          <ContentText>
            Ushbu loyihaning maqsadi oʻzbek tilida ilmiy maqolalar onlayn chop
            etish orqali milliy kontentni boyitish va hamjamiyatni kengaytirish
          </ContentText>
          <ContentCopyright>© Copyright 2023 Boss Blog inc.</ContentCopyright>
        </Content>
        <Socials>
          <SocialMedias>
            <SocialMedia>
              <FaceBookIcon />
            </SocialMedia>
            <SocialMedia>
              <YouTubeIcon />
            </SocialMedia>
            <SocialMedia>
              <TwitterIcon />
            </SocialMedia>
          </SocialMedias>
          <Downloads>
            <DownloadAppStore />
            <DownloadPlayMarket />
          </Downloads>
        </Socials>
      </Container>
    </OuterContainer>
  );
}

export default Footer;
