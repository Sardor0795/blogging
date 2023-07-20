import React, { useEffect, useState } from "react";
import { ButtonRow, OuterContainer, TopicsContainer } from "./style";
import LoadMoreButton from "../LoadMore";
import ListArticle from "../Article/List";
import ListSkeleton from "../ListSkeleton";
import Header from "./Header";

function Profile(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData([1, 2, 3, 4, 5, 6]);
    }, 500);
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

export default Profile;
