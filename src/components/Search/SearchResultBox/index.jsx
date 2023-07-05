import React from "react";
import {
  SearchResultBoxContent,
  SearchResultBoxImg,
  SearchResultBoxText,
  SearchResultBoxTitle,
  SearchResultBox,
  SearchResultBoxUserLink,
} from "./style";

export const SearchResultComp = ({ setOpened }) => {
  return (
    <SearchResultBox>
      <SearchResultBoxContent>
        <SearchResultBoxTitle onClick={(e) => setOpened(false)} to={`/posts/5`}>
          ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
        </SearchResultBoxTitle>
        <SearchResultBoxText>
          17 sentabr 2020 •
          <SearchResultBoxUserLink
            onClick={(e) => setOpened(false)}
            to={"/profiles/25"}
          >
            AKBARALI KHASANOV
          </SearchResultBoxUserLink>
        </SearchResultBoxText>
      </SearchResultBoxContent>
      <SearchResultBoxImg onClick={(e) => setOpened(false)} to={`/posts/5`} />
    </SearchResultBox>
  );
};
