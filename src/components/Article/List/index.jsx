import React from "react";
import {
  Bottom,
  Container,
  Description,
  Desktop,
  Details,
  Image,
  Profile,
  RightSide,
  Tablet,
  Title,
  Top,
} from "./style";
import articleImg from "../../../assets/images/article.png";
import profileImg from "../../../assets/images/profile-img.svg";
import { ReactComponent as FavoritesIcon } from "../../../assets/icons/add_to_favorites.svg";
import { ReactComponent as ReadingTimeIcon } from "../../../assets/icons/reading_time.svg";
import { ReactComponent as CommentCountIcon } from "../../../assets/icons/comments_number.svg";
import { ReactComponent as ViewsCountIcon } from "../../../assets/icons/views_number.svg";

function ListArticle() {
  return (
    <Container>
      <Desktop>
        <Image url={articleImg} />
        <RightSide>
          <RightSide.Top>
            <Top>
              <Top.Topic>vizual dizayn</Top.Topic>
              <Top.Date>17 Sep 2023</Top.Date>
            </Top>
            <Title>
              <Title.Link>
                ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
              </Title.Link>
            </Title>
            <Description>
              <Description.Link>
                Ushbu so'nggi hodisa, ChatGPT haqida ushbu maqolani yozishni
                boshlaganimda, men har qanday kontekstda dunyo e'tiborini
                tortgan va...
              </Description.Link>
              <Description.LinkShort>
                Ushbu so'nggi hodisa, ChatGPT haqida ushbu...
              </Description.LinkShort>
            </Description>
          </RightSide.Top>
          <RightSide.Bottom>
            <Bottom>
              <Profile>
                <Profile.Container>
                  <Profile.Img url={profileImg} />
                  <Profile.Text>Akbarali Khasanov</Profile.Text>
                </Profile.Container>
              </Profile>
              <Details>
                <Details.Button>
                  <FavoritesIcon />
                  <Details.ButtonText>Keyinroq o‘qish</Details.ButtonText>
                </Details.Button>
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
              </Details>
            </Bottom>
          </RightSide.Bottom>
        </RightSide>
      </Desktop>
      <Tablet>
        <Bottom>
          <Profile>
            <Profile.Container>
              <Profile.Img url={profileImg} />
              <Profile.Text>Akbarali Khasanov</Profile.Text>
            </Profile.Container>
            <button>
              <FavoritesIcon />
              <Details.ButtonText>Keyinroq o‘qish</Details.ButtonText>
            </button>
          </Profile>
          <Details>
            <Details.Button>
              <FavoritesIcon />
              <Details.ButtonText>Keyinroq o‘qish</Details.ButtonText>
            </Details.Button>
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
          </Details>
        </Bottom>
      </Tablet>
    </Container>
  );
}

export default ListArticle;
