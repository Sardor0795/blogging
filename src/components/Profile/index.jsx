import React, { useEffect, useState } from "react";
import { ButtonRow, OuterContainer, TopicsContainer } from "./style";
import LoadMoreButton from "../LoadMore";
import ListArticle from "../Article/List";
import ListSkeleton from "../ListSkeleton";
import Header from "./Header";
import axios from "axios";
import { mainUrl } from "../../utils/api";
import { useParams } from "react-router-dom";

function Profile(props) {
  const { id: name } = useParams();
  const [buttonIsVisible, setButtonIsVisible] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`${mainUrl}/users/posts/${name}?page=1&limit=1`).then((res) => {
      if (res?.status) setData(res?.data);
    });
  }, [name]);

  useEffect(() => {
    if (!data) setButtonIsVisible(false);
    else if (data?.pagination?.page === data?.pagination?.totalPages)
      setButtonIsVisible(false);
    else setButtonIsVisible(true);
  }, [data]);

  return (
    <OuterContainer>
      <Header />
      <TopicsContainer>
        {data
          ? data?.posts?.map((item, index) => (
              <ListArticle data={item} key={index} />
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

export default Profile;
