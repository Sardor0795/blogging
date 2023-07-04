import React from "react";
import {
  SearchResultBoxContent,
  SearchResultBoxImg,
  SearchResultBoxText,
  SearchResultBoxTitle,
  SearchResultBox,
} from "./style";

export const SearchResultComp = ({ setOpened }) => {
  return (
    <SearchResultBox>
      <SearchResultBoxContent>
        <SearchResultBoxTitle onClick={(e) => setOpened(false)} to={`/posts/5`}>
          ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
        </SearchResultBoxTitle>
        <SearchResultBoxText>
          17 sentabr 2020 • AKBARALI KHASANOV
        </SearchResultBoxText>
      </SearchResultBoxContent>
      <SearchResultBoxImg onClick={(e) => setOpened(false)} to={`/posts/5`} />
    </SearchResultBox>
  );
};
