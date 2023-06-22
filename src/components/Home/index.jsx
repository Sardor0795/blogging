import React from "react";
import Header from "./Header";
import { OuterContainer } from "./style";
import NewArticles from "./NewArticles";

function HomeComponent() {
  return (
    <OuterContainer>
      <Header />
      <NewArticles />
    </OuterContainer>
  );
}

export default HomeComponent;
