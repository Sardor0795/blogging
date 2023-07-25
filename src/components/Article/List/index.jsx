import React, { useEffect, useState } from "react";
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
// import articleImg from "../../../assets/images/article.png";
import profileImg from "../../../assets/images/profile-img.svg";
import { ReactComponent as FavoritesIcon } from "../../../assets/icons/add_to_favorites.svg";
import { ReactComponent as ReadingTimeIcon } from "../../../assets/icons/reading_time.svg";
import { ReactComponent as CommentCountIcon } from "../../../assets/icons/comments_number.svg";
import { ReactComponent as ViewsCountIcon } from "../../../assets/icons/views_number.svg";
import { toTop } from "./../../../utils/toTop";
import noimg from "../../../assets/images/no-img.png";

function ListArticle({ data }) {
  const [createdDate, setCreatedDate] = useState(null);

  useEffect(() => {
    if (data?.createdAt) {
      let d = String(new Date(data.createdAt)).split(" ");
      setCreatedDate([d[2], d[1], d[3]].join(" "));
    }
  }, [data]);

  return (
    <Container>
      <Desktop>
        <Image
          url={data?.image ?? noimg}
          to={`/posts/${data?.id ?? ""}`}
          onClick={toTop}
        />
        <RightSide>
          <RightSide.Top>
            <Top>
              <Top.Topic
                to={`/topics/${data?.postTopics[0]?.id ?? ""}`}
                onClick={toTop}
              >
                {data?.postTopics[0]?.name ?? ""}
              </Top.Topic>
              <Top.Date>{createdDate}</Top.Date>
            </Top>
            <Title>
              <Title.Link to={`/posts/${data?.id ?? ""}`} onClick={toTop}>
                {data?.title ?? ""}
              </Title.Link>
            </Title>
            <Description>
              <Description.Link to={`/posts/${data?.id ?? ""}`} onClick={toTop}>
                {data?.sub_title ?? ""}
              </Description.Link>
              <Description.LinkShort
                to={`/posts/${data?.id ?? ""}`}
                onClick={toTop}
              >
                {data?.sub_title ?? ""}
              </Description.LinkShort>
            </Description>
          </RightSide.Top>
          <RightSide.Bottom>
            <Bottom>
              <Profile>
                <Profile.Container to="/profiles/25" onClick={toTop}>
                  <Profile.Img url={data?.user?.user_img ?? profileImg} />
                  <Profile.Text>{data?.user?.username ?? ""}</Profile.Text>
                </Profile.Container>
              </Profile>
              <Details>
                <Details.Button type="button" title="Keyinroq o‘qish">
                  <FavoritesIcon />
                  <Details.ButtonText>Keyinroq o‘qish</Details.ButtonText>
                </Details.Button>
                <Details.Rightside>
                  <div>
                    <ReadingTimeIcon />
                    <p>{data?.body?.readingTimes ?? ""}</p>
                  </div>
                  <div>
                    <CommentCountIcon />
                    <p>{data?.body?.comments ?? ""}</p>
                  </div>
                  <div>
                    <ViewsCountIcon />
                    <p>{data?.body?.views ?? ""}</p>
                  </div>
                </Details.Rightside>
              </Details>
            </Bottom>
          </RightSide.Bottom>
        </RightSide>
      </Desktop>
      <Tablet>
        <Bottom>
          <Profile>
            <Profile.Container to="/profiles/25" onClick={toTop}>
              <Profile.Img url={data?.user?.user_img ?? profileImg} />
              <Profile.Text>{data?.user?.username ?? ""}</Profile.Text>
            </Profile.Container>
          </Profile>
          <Details>
            <Details.Button type="button" title="Keyinroq o‘qish">
              <FavoritesIcon />
              <Details.ButtonText>Keyinroq o‘qish</Details.ButtonText>
            </Details.Button>
            <Details.Rightside>
              <div>
                <ReadingTimeIcon />
                <p>{data?.body?.readingTimes ?? ""}</p>
              </div>
              <div>
                <CommentCountIcon />
                <p>{data?.body?.comments ?? ""}</p>
              </div>
              <div>
                <ViewsCountIcon />
                <p>{data?.body?.views ?? ""}</p>
              </div>
            </Details.Rightside>
          </Details>
        </Bottom>
      </Tablet>
    </Container>
  );
}

export default ListArticle;
