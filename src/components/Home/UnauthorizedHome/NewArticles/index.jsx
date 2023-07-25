import React, { useEffect, useState } from "react";
import useSearch from "../../../../hooks/useSearch";
import { OuterContainer, Container, Items, ButtonRow } from "./style";
import FilterPart from "./Filter";
import ListArticle from "../../../Article/List";
import CardArticle from "../../../Article/Card";
import ListSkeleton from "../../../ListSkeleton";
import CardSkeleton from "../../../CardSkeleton";
import LoadMoreButton from "../../../LoadMore";
import { mainUrl } from "../../../../utils/api";
import axios from "axios";

function NewArticles({ auth }) {
  const search = useSearch();
  const [type, setType] = useState(search.get("type"));
  const [data, setData] = useState(null);

  useEffect(() => {
    setType(search.get("type"));
  }, [search]);

  useEffect(() => {
    axios.get(`${mainUrl}/posts?page=1&limit=6`).then((res) => {
      if (res.status === 200) setData(res?.data?.posts);
    });
  }, []);

  return (
    <OuterContainer>
      <Container>
        <FilterPart auth={auth} />
        <Items type={type}>
          {data
            ? data?.map((item, index) => (
                <React.Fragment key={index}>
                  {type === "card" ? (
                    <CardArticle data={item} />
                  ) : (
                    <ListArticle data={item} />
                  )}
                </React.Fragment>
              ))
            : Array(6)
                .fill()
                .map((item, index) => (
                  <React.Fragment key={index}>
                    {type === "card" ? <CardSkeleton /> : <ListSkeleton />}
                  </React.Fragment>
                ))}
        </Items>
        {data && (
          <ButtonRow>
            <LoadMoreButton />
          </ButtonRow>
        )}
      </Container>
    </OuterContainer>
  );
}

export default NewArticles;
