import React, { useEffect } from "react";
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
  ProfileLink,
} from "./style";
// import articleImg from "../../../assets/images/article.png";
// import profileImg from "../../../assets/images/profile-img.svg";
import { ReactComponent as FavoritesIcon } from "../../../assets/icons/add_to_favorites.svg";
import { ReactComponent as ReadingTimeIcon } from "../../../assets/icons/reading_time.svg";
import { ReactComponent as CommentCountIcon } from "../../../assets/icons/comments_number.svg";
import { ReactComponent as ViewsCountIcon } from "../../../assets/icons/views_number.svg";
import { toTop } from "./../../../utils/toTop";
import { useState } from "react";
import noimg from "../../../assets/images/no-img.png";

function CardArticle({ data }) {
  const [createdDate, setCreatedDate] = useState(null);
  const [viewMin, setViewMin] = useState(null);

  useEffect(() => {
    if (data?.createdAt) {
      let d = String(new Date(data?.createdAt)).split(" ");
      setCreatedDate([d[2], d[1], d[3]].join(" "));
    }
    if (data?.body?.readingTimes) {
      let viewSek = data?.body?.readingTimes;
      let viewMin = parseInt(viewSek / 60);
      setViewMin(viewMin);
    }
  }, [data]);

  return (
    <OuterContainer>
      <Container>
        <Image
          url={data?.image ?? noimg}
          to={`/posts/${data?.id ?? ""}`}
          onClick={toTop}
        />
        <Content>
          <TopPart>
            <TopPart.Topic
              to={`/topics/${data?.postTopics[0]?.id ?? ""}`}
              onClick={toTop}
            >
              {data?.postTopics[0]?.name ?? ""}
            </TopPart.Topic>
            <TopPart.Date>{createdDate}</TopPart.Date>
          </TopPart>
          <Title>
            <Title.Link to={`/posts/${data?.id ?? ""}`} onClick={toTop}>
              {data?.title ?? ""}
            </Title.Link>
          </Title>
          <Description>
            <Description.Link to={`/posts/${data?.id ?? ""}`} onClick={toTop}>
              {data?.sub_title ?? ""}
            </Description.Link>
          </Description>
          <Profile>
            <ProfileLink
              to={`/profiles/${data?.user?.username ?? ""}`}
              onClick={toTop}
            >
              <Profile.Image url={data?.user?.user_img ?? ""} />
              <Profile.Name>{data?.user?.full_name ?? ""}</Profile.Name>
            </ProfileLink>
          </Profile>
          <Details>
            <Details.Leftside>
              <Info>
                <CommentCountIcon />
                <div>{data?.body?.comments ?? ""}</div>
              </Info>
              <Info>
                <ViewsCountIcon />
                <div>{data?.body?.views ?? ""}</div>
              </Info>
              <Info>
                <ReadingTimeIcon />
                <div>{viewMin ?? "0"} min</div>
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
