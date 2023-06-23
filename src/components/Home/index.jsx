import React from "react";
import PopularBlogs from "./PopularBlogs";
import Header from "./Header";
import { OuterContainer } from "./style";
import NewArticles from "./NewArticles";

function HomeComponent() {
  return (
    <OuterContainer>
      <Header />
      <PopularBlogs />
      <NewArticles />
    </OuterContainer>
  );
}

export default HomeComponent;
