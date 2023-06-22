import React from "react";
import {
  Container,
  OuterContainer,
  PopCardsWrapper,
  SectionTitle,
  TitleIcon,
} from "./style";

import PopBlogImg from "../../assets/images/pop-blog-sample-img.jpg";
import { PopCard } from "./PopCard";

const mockData = [
  {
    id: 1,
    img: PopBlogImg,
    date: "17 SEP 2023",
    author: "Alexander Brown",
    title: "ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman",
  },
  {
    id: 2,
    img: null,
    date: "17 SEP 2023",
    author: "Alexander Brown",
    title: "ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman",
  },
  {
    id: 3,
    img: PopBlogImg,
    date: "17 SEP 2023",
    author: "Alexander Brown",
    title: "ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman",
  },
  {
    id: 4,
    img: null,
    date: "17 SEP 2023",
    author: "Alexander Brown",
    title: "ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman",
  },
  {
    id: 5,
    img: PopBlogImg,
    date: "17 SEP 2023",
    author: "Alexander Brown",
    title: "ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman",
  },
  {
    id: 6,
    img: PopBlogImg,
    date: "17 SEP 2023",
    author: "Alexander Brown",
    title: "ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman",
  },
];

function PopularBlogs() {
  return (
    <OuterContainer>
      <Container>
        <SectionTitle>
          <TitleIcon />
          Mashxur maqolalar
        </SectionTitle>

        <PopCardsWrapper>
          {mockData.map((v) => (
            <PopCard
              key={v.id}
              cardimg={v.img}
              cardDate={v.date}
              cardAuthor={v.author}
              cardTitle={v.title}
            />
          ))}
        </PopCardsWrapper>
      </Container>
    </OuterContainer>
  );
}

export default PopularBlogs;
