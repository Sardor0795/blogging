import React from "react";
import {
  Bottom,
  Container,
  Description,
  Desktop,
  Details,
  Image,
  ProfileSettings,
  RightSide,
  SettingBtn,
  Tablet,
  Title,
  Top,
} from "./style";
import articleImg from "../../../assets/images/article.png";
import { ReactComponent as FavoritesIcon } from "../../../assets/icons/add_to_favorites.svg";
import { ReactComponent as ReadingTimeIcon } from "../../../assets/icons/reading_time.svg";
import { ReactComponent as CommentCountIcon } from "../../../assets/icons/comments_number.svg";
import { ReactComponent as ViewsCountIcon } from "../../../assets/icons/views_number.svg";
import { toTop } from "../../../utils/toTop";

function ListArticle({ id, setopened }) {
  return (
    <Container>
      <Desktop>
        <Image url={articleImg} to={`/posts/${id}`} onClick={toTop} />
        <RightSide>
          <RightSide.Top>
            <Top>
              <Top.Topic to="/topics/vizual+dizayn" onClick={toTop}>
                vizual dizayn
              </Top.Topic>
              <Top.Date>17 Sep 2023</Top.Date>
            </Top>
            <Title>
              <Title.Link to={`/posts/${id}`} onClick={toTop}>
                ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
              </Title.Link>
            </Title>
            <Description>
              <Description.Link to={`/posts/${id}`} onClick={toTop}>
                Ushbu so'nggi hodisa, ChatGPT haqida ushbu maqolani yozishni
                boshlaganimda, men har qanday kontekstda dunyo e'tiborini
                tortgan va...
              </Description.Link>
              <Description.LinkShort to="/posts/99" onClick={toTop}>
                Ushbu so'nggi hodisa, ChatGPT haqida ushbu...
              </Description.LinkShort>
            </Description>
          </RightSide.Top>
          <RightSide.Bottom>
            <Bottom>
              <Details>
                <Details.Button type="button" title="Keyinroq o‘qish">
                  <FavoritesIcon />
                  <Details.ButtonText>Keyinroq o‘qish</Details.ButtonText>
                </Details.Button>
                <Details.Rightside>
                  <div>
                    <ReadingTimeIcon />
                    <p>3 daqiqa o‘qish</p>
                  </div>
                  <div>
                    <CommentCountIcon />
                    <p>34</p>
                  </div>
                  <div>
                    <ViewsCountIcon />
                    <p>8.6K</p>
                  </div>
                </Details.Rightside>
              </Details>
              <ProfileSettings>
                <SettingBtn to="/edit/5" edit="true">
                  Tahrirlash
                </SettingBtn>
                <SettingBtn onClick={() => setopened(true)}>
                  O‘chirish
                </SettingBtn>
              </ProfileSettings>
            </Bottom>
          </RightSide.Bottom>
        </RightSide>
      </Desktop>
      <Tablet>
        <Bottom>
          <Details>
            <Details.Button type="button" title="Keyinroq o‘qish">
              <FavoritesIcon />
              <Details.ButtonText>Keyinroq o‘qish</Details.ButtonText>
            </Details.Button>
            <Details.Rightside>
              <div>
                <ReadingTimeIcon />
                <p>3 daqiqa o‘qish</p>
              </div>
              <div>
                <CommentCountIcon />
                <p>34</p>
              </div>
              <div>
                <ViewsCountIcon />
                <p>8.6K</p>
              </div>
            </Details.Rightside>
          </Details>
          <ProfileSettings>
            <SettingBtn to="/edit-article/5" edit="true">
              Tahrirlash
            </SettingBtn>
            <SettingBtn onClick={() => setopened(true)}>O‘chirish</SettingBtn>
          </ProfileSettings>
        </Bottom>
      </Tablet>
    </Container>
  );
}

export default ListArticle;
