import React, { useEffect, useState } from "react";
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
import { toTop } from "../../../../../utils/toTop";
import { addDots } from "../../../../../utils/addDots";

export const PopCard = ({
  cardimg,
  cardDate,
  cardAuthor,
  cardAuthorUsername,
  cardTitle,
  id,
}) => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    let d = String(new Date(cardDate)).split(" ");
    setDate([d[2], d[1], d[3]].join(" "));
  }, [cardDate]);

  return (
    <PopCardWrapper>
      <PopCardImg cardimg={cardimg} to={`/posts/${id}`} onClick={toTop} />
      <PopCardContent>
        <PopCardInfoWrap>
          <PopCardDate>{date}</PopCardDate>
          <PopCardDot />
          <PopCardAuthor to={`/profiles/${cardAuthorUsername}`} onClick={toTop}>
            {cardAuthor}
          </PopCardAuthor>
        </PopCardInfoWrap>
        <PopCardTitle>
          <TitleLink to={`/posts/${id}`} onClick={toTop}>
            {addDots(cardTitle, 50)}
          </TitleLink>
        </PopCardTitle>
      </PopCardContent>
    </PopCardWrapper>
  );
};
