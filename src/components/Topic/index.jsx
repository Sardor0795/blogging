import React, { useEffect, useState } from "react";
import { ButtonRow, OuterContainer, TopicsContainer } from "./style";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { ReactComponent as LoadMore } from "../../assets/icons/load_more.svg";
import ListArticle from "./../Article/List/index";
import ListSkeleton from "./../ListSkeleton/index";

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
        <button>
          <LoadMore />
          <p>Ko’proq yuklash</p>
        </button>
      </ButtonRow>
    </OuterContainer>
  );
}

export default Topic;
