import React from "react";
import { OuterContainer, Container, Items } from "./style";
import FilterPart from "./filter-part.component";
import ListArticle from "../../Article/List";

function NewArticles() {
  return (
    <OuterContainer>
      <Container>
        <FilterPart />
        <Items>
          <ListArticle />
          <ListArticle />
          <ListArticle />
          <ListArticle />
        </Items>
      </Container>
    </OuterContainer>
  );
}

export default NewArticles;
