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
} from "./style";

export const PopCard = ({ cardimg, cardDate, cardAuthor, cardTitle }) => {
  return (
    <PopCardWrapper>
      <PopCardImg cardimg={cardimg} />
      <PopCardContent>
        <PopCardInfoWrap>
          <PopCardDate>{cardDate}</PopCardDate>
          <PopCardDot />
          <PopCardAuthor>{cardAuthor}</PopCardAuthor>
        </PopCardInfoWrap>
        <PopCardTitle>{cardTitle}</PopCardTitle>
      </PopCardContent>
    </PopCardWrapper>
  );
};
