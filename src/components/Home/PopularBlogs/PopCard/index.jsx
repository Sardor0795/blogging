import React from "react";
import {
  PopCardAuthor,
  PopCardContent,
  PopCardDate,
  PopCardDot,
  PopCardImg,
  PopCardInfoWrap,
  PopCardTitle,
  PopCardWrapper,
  TitleLink,
} from "./style";
import { toTop } from "./../../../../utils/toTop";

export const PopCard = ({ cardimg, cardDate, cardAuthor, cardTitle }) => {
  return (
    <PopCardWrapper>
      <PopCardImg cardimg={cardimg} to="/posts/99" onClick={toTop} />
      <PopCardContent>
        <PopCardInfoWrap>
          <PopCardDate>{cardDate}</PopCardDate>
          <PopCardDot />
          <PopCardAuthor to="/profiles/25" onClick={toTop}>
            {cardAuthor}
          </PopCardAuthor>
        </PopCardInfoWrap>
        <PopCardTitle>
          <TitleLink to="/posts/99" onClick={toTop}>
            {cardTitle}
          </TitleLink>
        </PopCardTitle>
      </PopCardContent>
    </PopCardWrapper>
  );
};
