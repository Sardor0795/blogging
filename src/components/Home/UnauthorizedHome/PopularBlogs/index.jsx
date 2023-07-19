import React, { useEffect, useState } from "react";
import {
  Container,
  OuterContainer,
  PopCardsWrapper,
  SectionTitle,
  TitleIcon,
} from "./style";
import PopCardSkeletonComponent from "./PopCardSkeleton";
import { PopCard } from "./PopCard";
import axios from "axios";
import { mainUrl } from "./../../../../utils/api";

function PopularBlogs() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`${mainUrl}/posts/tranding`).then((res) => {
      if (res.status === 200) setData(res.data.data);
    });
  }, []);

  return (
    <OuterContainer>
      <Container>
        <SectionTitle>
          <TitleIcon />
          Mashxur maqolalar
        </SectionTitle>

        <PopCardsWrapper>
          {data
            ? data?.map((v) => (
                <PopCard
                  key={v.id}
                  cardimg={v.image}
                  cardDate={v.createdAt}
                  cardAuthor={v.fullname}
                  cardAuthorUsername={v.username}
                  cardTitle={v.title}
                  id={v.id}
                />
              ))
            : Array(6)
                .fill()
                .map((item, index) => <PopCardSkeletonComponent key={index} />)}
        </PopCardsWrapper>
      </Container>
    </OuterContainer>
  );
}

export default PopularBlogs;
