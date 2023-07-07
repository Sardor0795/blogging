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
  MobileCopyright,
  ContentLinkWrapper,
  FooterLogoLink,
} from "./style";
import { toTop } from "./../../utils/toTop";
import logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <OuterContainer>
      <Container>
        <LogoLinkWrapper>
          <FooterLogoLink to="/">
            <FooterLogo src={logo} alt="BossBlog" />
          </FooterLogoLink>
        </LogoLinkWrapper>
        <Content>
          <ContentLinks>
            <ContentLinkWrapper>
              <ContentLink to="/about" onClick={toTop}>
                Loyiha haqida
              </ContentLink>
            </ContentLinkWrapper>
            <ContentLinkWrapper>
              <ContentLink>Yordam</ContentLink>
            </ContentLinkWrapper>
            <ContentLinkWrapper>
              <ContentLink to="/terms-of-use" onClick={toTop}>
                Foydalanish shartlari
              </ContentLink>
            </ContentLinkWrapper>
            <ContentLinkWrapper>
              <ContentLink to="/privacy" onClick={toTop}>
                Maxfiylik siyosati
              </ContentLink>
            </ContentLinkWrapper>
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
        <MobileCopyright>© Copyright 2023 Boss Blog inc.</MobileCopyright>
      </Container>
    </OuterContainer>
  );
}

export default Footer;
