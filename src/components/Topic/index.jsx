import React, { useEffect, useState } from "react";
import { ButtonRow, OuterContainer, TopicsContainer } from "./style";
import Header from "./Header";
import { useParams } from "react-router-dom";
import ListArticle from "./../Article/List";
import ListSkeleton from "./../ListSkeleton";
import LoadMoreButton from "../LoadMore";

const exampleObject = {
  id: "4e2a779e-6be7-4f87-8b5f-fe56d4147505",
  title: "NodeJS 20 is HERE! 10 Features that will blow your mind 🤯",
  sub_title: "NodeJS 20 is HERE! 10 Features that will blow your mind 🤯",
  image:
    "https://eu2.contabostorage.com/950c9c0b316e4a9fb8da4298d8d89764:bossblog/q5c0ie5paj_1690205318427.png",
  body: {
    readingTimes: 82,
    clups: 0,
    views: 0,
    comments: 0,
  },
  createdAt: "2023-07-24T13:29:40.377Z",
  user: {
    id: "60f0c5f0-cbdb-4bd2-80e0-631a17eaca30",
    username: "abbos",
    user_img: null,
  },
  postTopics: [
    {
      name: "Dasturlash",
      id: "26a27fb9-0074-4109-a10d-95445e299574",
    },
    {
      name: "Dizayn",
      id: "ce897f77-0e43-4ffc-a1d5-6e64164fdc89",
    },
  ],
};

function Topic() {
  const { id } = useParams();
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
          ? data.map((item, index) => (
              <ListArticle data={exampleObject} key={index} />
            ))
          : Array(6)
              .fill()
              .map((item, index) => <ListSkeleton key={index} />)}
      </TopicsContainer>
      {data && (
        <ButtonRow>
          <LoadMoreButton />
        </ButtonRow>
      )}
    </OuterContainer>
  );
}

export default Topic;
