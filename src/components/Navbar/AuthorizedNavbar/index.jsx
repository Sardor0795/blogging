import React, { useState, useEffect } from "react";
import {
  Container,
  ForLogo,
  Layer,
  NavbarLink,
  OuterContainer,
  Profile,
  ProfileArrow,
  ProfileBody,
  ProfileHeader,
  ProfileLink,
  ProfileLinkCon,
  RightSide,
  SearchButton,
} from "./style";
import Search from "../../Search";
import { toTop } from "./../../../utils/toTop";
import logo from "../../../assets/images/logo.png";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import arrow from "../../../assets/icons/profile-arrow.png";
import { ReactComponent as ProfileSettings } from "../../../assets/icons/profile-settings.svg";
import { ReactComponent as ProfileFavorites } from "../../../assets/icons/profile-favorites.svg";
import { ReactComponent as ProfileMyArticles } from "../../../assets/icons/profile-my-articles.svg";
import { ReactComponent as ProfileStatistics } from "../../../assets/icons/profile-statistics.svg";

function AuthorizedNavbar() {
  const [scrolling, setScrolling] = useState(false);
  const [searchOpened, setSearchOpened] = useState(false);
  const [profileOpened, setProfileOpened] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) setScrolling(true);
      else setScrolling(false);
    });
  }, []);

  return (
    <OuterContainer scrolling={`${scrolling}`}>
      <Container>
        <ForLogo to="/" aria-label="Bosh sahifa">
          <img src={logo} alt="BossBlog" />
        </ForLogo>
        <RightSide>
          <RightSide.Search>
            <SearchButton
              onClick={() => setSearchOpened(true)}
              type="button"
              title="Qidiruv"
            >
              <SearchIcon />
            </SearchButton>
          </RightSide.Search>
          <Search opened={searchOpened} setOpened={setSearchOpened} />
          <NavbarLink aria-label="Maqola yozish" to="/write" onClick={toTop}>
            Yozish
          </NavbarLink>
          <Profile>
            <ProfileHeader onClick={() => setProfileOpened((p) => !p)}>
              <ProfileHeader.Avatar>AK</ProfileHeader.Avatar>
              <ProfileHeader.Icon opened={`${profileOpened}`}>
                <img src={arrow} alt="profile" />
              </ProfileHeader.Icon>
            </ProfileHeader>
            <ProfileArrow opened={`${profileOpened}`} />
            <ProfileBody opened={`${profileOpened}`}>
              <ProfileLinkCon>
                <ProfileLink
                  to="/profile-settings"
                  onClick={() => {
                    toTop();
                    setProfileOpened(false);
                  }}
                >
                  <ProfileLink.Icon>
                    <ProfileSettings />
                  </ProfileLink.Icon>
                  <ProfileLink.Text>Profil sozlamalari</ProfileLink.Text>
                </ProfileLink>
              </ProfileLinkCon>
              <ProfileLinkCon>
                <ProfileLink
                  to="/profile-favorites"
                  onClick={() => {
                    toTop();
                    setProfileOpened(false);
                  }}
                >
                  <ProfileLink.Icon>
                    <ProfileFavorites />
                  </ProfileLink.Icon>
                  <ProfileLink.Text>Saqlanganlar</ProfileLink.Text>
                </ProfileLink>
              </ProfileLinkCon>
              <ProfileLinkCon>
                <ProfileLink
                  to="/profile-articles"
                  onClick={() => {
                    toTop();
                    setProfileOpened(false);
                  }}
                >
                  <ProfileLink.Icon>
                    <ProfileMyArticles />
                  </ProfileLink.Icon>
                  <ProfileLink.Text>Maqolalarim</ProfileLink.Text>
                </ProfileLink>
              </ProfileLinkCon>
              <ProfileLinkCon>
                <ProfileLink
                  to="/profile-statistics"
                  onClick={() => {
                    toTop();
                    setProfileOpened(false);
                  }}
                >
                  <ProfileLink.Icon>
                    <ProfileStatistics />
                  </ProfileLink.Icon>
                  <ProfileLink.Text>Statistika</ProfileLink.Text>
                </ProfileLink>
              </ProfileLinkCon>
            </ProfileBody>
          </Profile>
          <Layer
            opened={`${profileOpened}`}
            onClick={() => setProfileOpened(false)}
          />
        </RightSide>
      </Container>
    </OuterContainer>
  );
}

export default AuthorizedNavbar;
