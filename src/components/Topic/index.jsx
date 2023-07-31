import React, { useEffect, useState } from "react";
import { ButtonRow, OuterContainer, TopicsContainer } from "./style";
import Header from "./Header";
import { useParams } from "react-router-dom";
import ListArticle from "./../Article/List";
import ListSkeleton from "./../ListSkeleton";
import LoadMoreButton from "../LoadMore";
import axios from "axios";
import { mainUrl } from "../../utils/api";

function Topic() {
  const { id } = useParams();
  const [buttonIsVisible, setButtonIsVisible] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`${mainUrl}/topics/posts/${id}?page=1&limit=6`).then((res) => {
      console.log(res);
      if (res?.status) setData(res?.data);
    });
  }, [id]);

  useEffect(() => {
    if (!data) setButtonIsVisible(false);
    else if (data?.pagination?.page === data?.pagination?.totalPages)
      setButtonIsVisible(false);
    else setButtonIsVisible(true);
  }, [data]);

  return (
    <OuterContainer>
      <Header id={id} />
      <TopicsContainer>
        {data
          ? data?.posts?.map((item, index) => (
              <ListArticle data={item} key={item?.id ?? index} />
            ))
          : Array(6)
              .fill()
              .map((item, index) => <ListSkeleton key={index} />)}
      </TopicsContainer>
      {buttonIsVisible && (
        <ButtonRow>
          <LoadMoreButton />
        </ButtonRow>
      )}
    </OuterContainer>
  );
}

export default Topic;
