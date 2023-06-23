import React from "react";
import {
  Container,
  Description,
  ImageWrapper,
  Leftside,
  MainTitle,
  OuterContainer,
  Rightside,
  Title,
} from "./style";
import image from "../../assets/images/404.svg";
import { ReactComponent as Icon } from "../../assets/icons/404_button_icon.svg";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <OuterContainer>
      <Container>
        <Leftside>
          <Title>Voy...</Title>
          <MainTitle>Sahifa topilmadi</MainTitle>
          <Description>
            Bu sahifa mavjud emas yoki olib tashlangan! Bosh sahifaga
            qaytishingizni tavsiya qilamiz.
          </Description>
          <button
            onClick={handleClick}
            type="button"
            title="Bosh sahifaga qaytish"
          >
            <Icon />
            <p>Bosh sahifaga qaytish</p>
          </button>
        </Leftside>
        <Rightside>
          <ImageWrapper>
            <img src={image} alt="Sahifa topilmadi" />
          </ImageWrapper>
        </Rightside>
      </Container>
    </OuterContainer>
  );
}

export default NotFoundPage;
