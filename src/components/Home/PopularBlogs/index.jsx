import React, { useEffect, useState } from "react";
import {
  Container,
  OuterContainer,
  PopCardSkeleton,
  PopCardsWrapper,
  SectionTitle,
  TitleIcon,
} from "./style";
import { PopCard } from "./PopCard";
import ContentLoader from "react-content-loader";
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
                />
              ))
            : Array(6)
                .fill()
                .map((item, index) => (
                  <PopCardSkeleton key={index}>
                    <ContentLoader
                      height={140}
                      speed={1}
                      backgroundColor={"#e5e5e5"}
                      foregroundColor={"#fff"}
                      viewBox="0 0 380 70"
                    >
                      {/* Only SVG shapes */}
                      <rect x="0" y="0" rx="8" ry="8" width="70" height="70" />
                      <rect
                        x="80"
                        y="5"
                        rx="3"
                        ry="3"
                        width="300"
                        height="10"
                      />
                      <rect
                        x="80"
                        y="35"
                        rx="4"
                        ry="4"
                        width="300"
                        height="12"
                      />
                      <rect
                        x="80"
                        y="53"
                        rx="4"
                        ry="4"
                        width="300"
                        height="12"
                      />
                    </ContentLoader>
                  </PopCardSkeleton>
                ))}
        </PopCardsWrapper>
      </Container>
    </OuterContainer>
  );
}

export default PopularBlogs;
