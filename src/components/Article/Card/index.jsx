import React from "react";
import {
  OuterContainer,
  Container,
  Image,
  TopPart,
  Content,
  Title,
  Description,
  Details,
  Profile,
  Info,
  Bottom,
} from "./style";
import articleImg from "../../../assets/images/article.png";
import profileImg from "../../../assets/images/profile-img.svg";
import { ReactComponent as FavoritesIcon } from "../../../assets/icons/add_to_favorites.svg";
import { ReactComponent as ReadingTimeIcon } from "../../../assets/icons/reading_time.svg";
import { ReactComponent as CommentCountIcon } from "../../../assets/icons/comments_number.svg";
import { ReactComponent as ViewsCountIcon } from "../../../assets/icons/views_number.svg";

function CardArticle() {
  return (
    <OuterContainer>
      <Container>
        <Image url={articleImg} />
        <Content>
          <TopPart>
            <TopPart.Topic>vizual dizayn</TopPart.Topic>
            <TopPart.Date>17 Sep 2023</TopPart.Date>
          </TopPart>
          <Title>
            <Title.Link>
              ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
            </Title.Link>
          </Title>
          <Description>
            <Description.Link>
              Ushbu so'nggi hodisa, ChatGPT haqida ushbu maqolani yozishni
              boshlaganimda...
            </Description.Link>
          </Description>
          <Details>
            <Profile>
              <Profile.Image url={profileImg} />
              <Profile.Name>Akbarali Khasanov</Profile.Name>
            </Profile>
            <Details.Rightside>
              <Info>
                <CommentCountIcon />
                <div>34</div>
              </Info>
              <Info>
                <ViewsCountIcon />
                <div>8.6K</div>
              </Info>
            </Details.Rightside>
          </Details>
          <Bottom>
            <Info>
              <ReadingTimeIcon />
              <div>3 daqiqa o‘qish</div>
            </Info>
            <button>
              <FavoritesIcon />
              <div>Keyinroq o‘qish</div>
            </button>
          </Bottom>
        </Content>
      </Container>
    </OuterContainer>
  );
}

export default CardArticle;
