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
import { mockData } from "./mock";

function PopularBlogs() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData(mockData);
    }, 4000);
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
                  cardimg={v.img}
                  cardDate={v.date}
                  cardAuthor={v.author}
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
