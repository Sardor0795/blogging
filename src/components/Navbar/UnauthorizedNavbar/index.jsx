import React, { useEffect, useState } from "react";
import {
  Container,
  ForLogo,
  Menu,
  MenuContainer,
  Mobile,
  NavbarLink,
  OuterContainer,
  RightSide,
  SignUpButton,
  SearchButton,
} from "./style";
import logo from "../../../assets/images/logo.png";
import { ReactComponent as Hamburger } from "../../../assets/icons/hamburger.svg";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import close from "../../../assets/icons/close.png";
import Search from "../../Search";
import Auth from "./../../Auth";
import { toTop } from "./../../../utils/toTop";

function UnauthorizedNavbar({ yellowbg, fixed }) {
  const [opened, setOpened] = useState(false);
  const [searchOpened, setSearchOpened] = useState(false);
  const [authOpened, setAuthOpened] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const openSearch = () => {
    setOpened(false);
    setSearchOpened(true);
  };

  const openAuth = () => {
    setOpened(false);
    setAuthOpened(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <OuterContainer
      scrolling={`${scrolling}`}
      yellowbg={yellowbg}
      fixed={fixed}
    >
      <Container>
        <ForLogo
          to="/"
          aria-label="Bosh sahifa"
          onClick={() => setOpened(false)}
        >
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
          <Auth opened={authOpened} setOpened={setAuthOpened} />
          <NavbarLink
            to="/about"
            onClick={toTop}
            aria-label="Loyiha haqida"
            type="desktop"
          >
            Loyiha haqida
          </NavbarLink>
          <NavbarLink
            onClick={() => setAuthOpened(true)}
            aria-label="Maqola yozish"
            type="desktop"
          >
            Yozish
          </NavbarLink>
          <NavbarLink
            onClick={() => setAuthOpened(true)}
            aria-label="Shaxsiy kabinetga kirish"
            type="desktop"
          >
            Kirish
          </NavbarLink>
          <SignUpButton
            onClick={() => setAuthOpened(true)}
            type="button"
            style_type="desktop"
            aria-label="Roʻyxatdan oʻtish"
          >
            Boshlash
          </SignUpButton>
          <Mobile>
            <Mobile.Icon onClick={() => setOpened((p) => !p)}>
              <Mobile.Png opened={`${opened}`}>
                <img src={close} alt="close menu" />
              </Mobile.Png>
              <Mobile.Svg opened={`${opened}`}>
                <Hamburger />
              </Mobile.Svg>
            </Mobile.Icon>
            <Menu opened={`${opened}`} onClick={() => setOpened(false)}>
              <MenuContainer onClick={(e) => e.stopPropagation()}>
                <SearchButton
                  onClick={openSearch}
                  type="button"
                  aria-label="Qidiruv"
                >
                  <SearchIcon />
                </SearchButton>
                <SignUpButton onClick={openAuth} aria-label="Roʻyxatdan oʻtish">
                  Boshlash
                </SignUpButton>
                <NavbarLink onClick={openAuth} aria-label="Maqola yozish">
                  Yozish
                </NavbarLink>
                <NavbarLink
                  onClick={openAuth}
                  aria-label="Shaxsiy kabinetga kirish"
                >
                  Kirish
                </NavbarLink>
                <NavbarLink
                  onClick={() => setOpened(false)}
                  to="/about"
                  aria-label="Loyiha haqida"
                >
                  Loyiha haqida
                </NavbarLink>
              </MenuContainer>
            </Menu>
          </Mobile>
        </RightSide>
      </Container>
    </OuterContainer>
  );
}

export default UnauthorizedNavbar;
