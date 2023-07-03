import React from "react";
import { OuterContainer } from "./style";
import PopularBlogs from "./PopularBlogs";
import Header from "./Header";
import NewArticles from "./NewArticles";

function NoAuthHomeComponent() {
  return (
    <OuterContainer>
      <Header />
      <PopularBlogs />
      <NewArticles />
    </OuterContainer>
  );
}

export default NoAuthHomeComponent;
