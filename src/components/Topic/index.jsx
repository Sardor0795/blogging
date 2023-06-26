import React, { useEffect, useState } from "react";
import { ButtonRow, OuterContainer, TopicsContainer } from "./style";
import Header from "./Header";
import { useParams } from "react-router-dom";
import ListArticle from "./../Article/List";
import ListSkeleton from "./../ListSkeleton";
import LoadMoreButton from "../LoadMore";

function Topic() {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData([1, 2, 3, 4, 5, 6]);
    }, 4000);
  }, []);

  return (
    <OuterContainer>
      <Header />
      <TopicsContainer>
        {data
          ? data.map((item, index) => <ListArticle data={item} key={index} />)
          : Array(6)
              .fill()
              .map((item, index) => <ListSkeleton key={index} />)}
      </TopicsContainer>
      <ButtonRow>
        <LoadMoreButton />
      </ButtonRow>
    </OuterContainer>
  );
}

export default Topic;
