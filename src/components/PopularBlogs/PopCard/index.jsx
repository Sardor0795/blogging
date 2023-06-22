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

export const PopCard = ({ cardImg, cardDate, cardAuthor, cardTitle }) => {
  return (
    <PopCardWrapper>
      <PopCardImg cardImg={cardImg} />
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
