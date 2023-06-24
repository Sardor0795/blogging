import React from "react";
import { OuterContainer, TopicsContainer, TopicsItem } from "./style";
import Header from "./Header";
import { Link } from "react-router-dom";

function Topics() {
  return (
    <OuterContainer>
      <Header />
      <TopicsContainer>
        {Array(12)
          .fill()
          .map((item, index) => (
            <TopicsItem key={index}>
              <TopicsItem.Header>Title</TopicsItem.Header>
              <TopicsItem.List>
                <TopicsItem.ListItem>
                  <Link to="one">List One</Link>
                </TopicsItem.ListItem>
                <TopicsItem.ListItem>
                  <Link to="two">List Two</Link>
                </TopicsItem.ListItem>
                <TopicsItem.ListItem>
                  <Link to="three">List Three</Link>
                </TopicsItem.ListItem>
                <TopicsItem.ListItem>
                  <Link to="four">List Four</Link>
                </TopicsItem.ListItem>
              </TopicsItem.List>
            </TopicsItem>
          ))}
      </TopicsContainer>
    </OuterContainer>
  );
}

export default Topics;
