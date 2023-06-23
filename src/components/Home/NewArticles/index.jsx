import React, { useEffect, useState } from "react";
import { OuterContainer, Container, Items } from "./style";
import FilterPart from "./filter-part.component";
import ListArticle from "../../Article/List";
import CardArticle from "./../../Article/Card";
import useSearch from "../../../hooks/useSearch";

function NewArticles() {
  const search = useSearch();
  const [type, setType] = useState(search.get("type"));
  const [data, setData] = useState(null);

  useEffect(() => {
    setType(search.get("type"));
  }, [search]);

  useEffect(() => {
    setData([1, 2, 3, 4, 5, 6]);
  }, []);

  return (
    <OuterContainer>
      <Container>
        <FilterPart />
        <Items type={type}>
          {type === "card" ? (
            <>
              {data
                ? data?.map((item, index) => (
                    <CardArticle data={item} key={index} />
                  ))
                : "Loading"}
            </>
          ) : (
            <>
              {data
                ? data?.map((item, index) => (
                    <ListArticle data={item} key={index} />
                  ))
                : "Loading"}
            </>
          )}
        </Items>
      </Container>
    </OuterContainer>
  );
}

export default NewArticles;
