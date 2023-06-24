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
} from "./style";
import articleImg from "../../../assets/images/article.png";
import profileImg from "../../../assets/images/profile-img.svg";
import { ReactComponent as FavoritesIcon } from "../../../assets/icons/add_to_favorites.svg";
import { ReactComponent as ReadingTimeIcon } from "../../../assets/icons/reading_time.svg";
import { ReactComponent as CommentCountIcon } from "../../../assets/icons/comments_number.svg";
import { ReactComponent as ViewsCountIcon } from "../../../assets/icons/views_number.svg";
import { toTop } from "./../../../utils/toTop";

function CardArticle() {
  return (
    <OuterContainer>
      <Container>
        <Image url={articleImg} to="/posts/99" onClick={toTop} />
        <Content>
          <TopPart>
            <TopPart.Topic to="/topics/vizual+dizayn" onClick={toTop}>
              vizual dizayn
            </TopPart.Topic>
            <TopPart.Date>17 Sep 2023</TopPart.Date>
          </TopPart>
          <Title>
            <Title.Link to="/posts/99" onClick={toTop}>
              ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
            </Title.Link>
          </Title>
          <Description>
            <Description.Link to="/posts/99" onClick={toTop}>
              Ushbu so'nggi hodisa, ChatGPT haqida ushbu maqolani yozishni
              boshlaganimda...
            </Description.Link>
          </Description>
          <Profile to="/profiles/25" onClick={toTop}>
            <Profile.Image url={profileImg} />
            <Profile.Name>Akbarali Khasanov</Profile.Name>
          </Profile>
          <Details>
            <Details.Leftside>
              <Info>
                <CommentCountIcon />
                <div>34</div>
              </Info>
              <Info>
                <ViewsCountIcon />
                <div>8.6K</div>
              </Info>
              <Info>
                <ReadingTimeIcon />
                <div>3 daqiqa o‘qish</div>
              </Info>
            </Details.Leftside>
            <button type="button" title="Keyinroq o‘qish">
              <FavoritesIcon />
              <div>Keyinroq o‘qish</div>
            </button>
          </Details>
        </Content>
      </Container>
    </OuterContainer>
  );
}

export default CardArticle;
