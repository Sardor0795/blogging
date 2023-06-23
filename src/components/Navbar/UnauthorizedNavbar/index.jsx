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
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { ReactComponent as Hamburger } from "../../../assets/icons/hamburger.svg";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import close from "../../../assets/icons/close.png";
import Search from "../../Search";
import Auth from "./../../Auth";

function UnauthorizedNavbar({yellowbg}) {
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
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) setScrolling(true);
      else setScrolling(false);
    });
  }, []);

  return (
    <OuterContainer yellowbg={yellowbg} scrolling={`${scrolling}`}>
      <Container>
        <ForLogo to="/" onClick={() => setOpened(false)}>
          <Logo />
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
          <NavbarLink to="/about" type="desktop">
            Loyiha haqida
          </NavbarLink>
          <NavbarLink type="desktop">Yozish</NavbarLink>
          <NavbarLink onClick={() => setAuthOpened(true)} type="desktop">
            Kirish
          </NavbarLink>
          <SignUpButton
            onClick={() => setAuthOpened(true)}
            type="button"
            style_type="desktop"
            title="Roʻyxatdan oʻtish"
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
                  title="Qidiruv"
                >
                  <SearchIcon />
                </SearchButton>
                <SignUpButton onClick={openAuth} title="Roʻyxatdan oʻtish">
                  Boshlash
                </SignUpButton>
                <NavbarLink onClick={() => setOpened(false)}>Yozish</NavbarLink>
                <NavbarLink onClick={openAuth}>Kirish</NavbarLink>
                <NavbarLink onClick={() => setOpened(false)} to="/about">
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
