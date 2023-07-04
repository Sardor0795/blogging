import React from "react";
import {
  SearchResultBoxContent,
  SearchResultBoxImg,
  SearchResultBoxText,
  SearchResultBoxTitle,
  SearchResultBox,
} from "./style";

export const SearchResultComp = () => {
  return (
    <SearchResultBox>
      <SearchResultBoxContent>
        <SearchResultBoxTitle>
          ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
        </SearchResultBoxTitle>
        <SearchResultBoxText>
          17 sentabr 2020 • AKBARALI KHASANOV
        </SearchResultBoxText>
      </SearchResultBoxContent>
      <SearchResultBoxImg />
    </SearchResultBox>
  );
};
