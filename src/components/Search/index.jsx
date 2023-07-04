import React from "react";
import { SearchResultComp } from "./SearchResultBox";
import {
  CloseBtn,
  Layer,
  Menu,
  MenuContainer,
  Modal,
  SearchContent,
  SearchContentInput,
  SearchContentText,
  SearchImg,
  SearchInputMobile,
  SearchResultInfo,
  SearchResultsWrapper,
  SearchWrapper,
} from "./style";

function Search({ opened, setOpened }) {
  return (
    <Layer opened={`${opened}`} onClick={(e) => setOpened(false)}>
      <Menu opened={`${opened}`}>
        <MenuContainer>
          <Modal onClick={(e) => e.stopPropagation()}>
            <SearchWrapper>
              <SearchImg />
              <SearchContent>
                <SearchContentText>Saytda qidiruv</SearchContentText>
                <SearchContentInput placeholder="Kalit so’zni kiriting" />
              </SearchContent>
              <CloseBtn onClick={(e) => setOpened(false)} />
              <SearchInputMobile placeholder="Kalit so’zni kiriting" />
            </SearchWrapper>
              <SearchResultInfo>
                “ChatGPT” so’rovi bo’yicha <b>16ta</b> natija topildi
              </SearchResultInfo>
            <SearchResultsWrapper>
              {/* Search result box */}
              <SearchResultComp />
              <SearchResultComp />
              <SearchResultComp />
              <SearchResultComp />
              <SearchResultComp />
            </SearchResultsWrapper>
          </Modal>
        </MenuContainer>
      </Menu>
    </Layer>
  );
}

export default Search;
