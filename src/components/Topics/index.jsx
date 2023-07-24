import React from "react";
import { OuterContainer, TopicsContainer, TopicsItem } from "./style";
import Header from "./Header";
import { Link } from "react-router-dom";
import { toTop } from "./../../utils/toTop";

function Topics() {
  return (
    <OuterContainer>
      <Header />
      <TopicsContainer>
        <TopicsItem>
          <TopicsItem.List>
            <TopicsItem.ListItem>
              <Link to="one" onClick={toTop}>
                List One
              </Link>
            </TopicsItem.ListItem>
            <TopicsItem.ListItem>
              <Link to="two" onClick={toTop}>
                List Two
              </Link>
            </TopicsItem.ListItem>
            <TopicsItem.ListItem>
              <Link to="three" onClick={toTop}>
                List Three
              </Link>
            </TopicsItem.ListItem>
            <TopicsItem.ListItem>
              <Link to="four" onClick={toTop}>
                List Four
              </Link>
            </TopicsItem.ListItem>
          </TopicsItem.List>
        </TopicsItem>
        <TopicsItem>
          <TopicsItem.List>
            <TopicsItem.ListItem>
              <Link to="one" onClick={toTop}>
                List One
              </Link>
            </TopicsItem.ListItem>
            <TopicsItem.ListItem>
              <Link to="two" onClick={toTop}>
                List Two
              </Link>
            </TopicsItem.ListItem>
            <TopicsItem.ListItem>
              <Link to="three" onClick={toTop}>
                List Three
              </Link>
            </TopicsItem.ListItem>
            <TopicsItem.ListItem>
              <Link to="four" onClick={toTop}>
                List Four
              </Link>
            </TopicsItem.ListItem>
          </TopicsItem.List>
        </TopicsItem>
        <TopicsItem>
          <TopicsItem.List>
            <TopicsItem.ListItem>
              <Link to="one" onClick={toTop}>
                List One
              </Link>
            </TopicsItem.ListItem>
            <TopicsItem.ListItem>
              <Link to="two" onClick={toTop}>
                List Two
              </Link>
            </TopicsItem.ListItem>
            <TopicsItem.ListItem>
              <Link to="three" onClick={toTop}>
                List Three
              </Link>
            </TopicsItem.ListItem>
            <TopicsItem.ListItem>
              <Link to="four" onClick={toTop}>
                List Four
              </Link>
            </TopicsItem.ListItem>
          </TopicsItem.List>
        </TopicsItem>
        <TopicsItem>
          <TopicsItem.List>
            <TopicsItem.ListItem>
              <Link to="one" onClick={toTop}>
                List One
              </Link>
            </TopicsItem.ListItem>
            <TopicsItem.ListItem>
              <Link to="two" onClick={toTop}>
                List Two
              </Link>
            </TopicsItem.ListItem>
            <TopicsItem.ListItem>
              <Link to="three" onClick={toTop}>
                List Three
              </Link>
            </TopicsItem.ListItem>
            <TopicsItem.ListItem>
              <Link to="four" onClick={toTop}>
                List Four
              </Link>
            </TopicsItem.ListItem>
          </TopicsItem.List>
        </TopicsItem>
        <TopicsItem>
          <TopicsItem.List>
            <TopicsItem.ListItem>
              <Link to="one" onClick={toTop}>
                List One
              </Link>
            </TopicsItem.ListItem>
            <TopicsItem.ListItem>
              <Link to="two" onClick={toTop}>
                List Two
              </Link>
            </TopicsItem.ListItem>
            <TopicsItem.ListItem>
              <Link to="three" onClick={toTop}>
                List Three
              </Link>
            </TopicsItem.ListItem>
            <TopicsItem.ListItem>
              <Link to="four" onClick={toTop}>
                List Four
              </Link>
            </TopicsItem.ListItem>
          </TopicsItem.List>
        </TopicsItem>
      </TopicsContainer>
    </OuterContainer>
  );
}

export default Topics;
