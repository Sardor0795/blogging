import React, { useEffect, useState } from "react";
import useSearch from "../../../hooks/useSearch";
import { OuterContainer, Container, Items, ButtonRow } from "./style";
import FilterPart from "./Filter";
import ListArticle from "../../Article/List";
import CardArticle from "./../../Article/Card";
import ListSkeleton from "../../ListSkeleton";
import CardSkeleton from "../../CardSkeleton";
import { ReactComponent as LoadMore } from "../../../assets/icons/load_more.svg";

function NewArticles() {
  const search = useSearch();
  const [type, setType] = useState(search.get("type"));
  const [data, setData] = useState(null);

  useEffect(() => {
    setType(search.get("type"));
  }, [search]);

  useEffect(() => {
    setTimeout(() => {
      setData([1, 2, 3, 4, 5, 6]);
    }, 4000);
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
                    <CardArticle id={index + 1} data={item} key={index} />
                  ))
                : Array(6)
                    .fill()
                    .map((item, index) => <CardSkeleton key={index} />)}
            </>
          ) : (
            <>
              {data
                ? data?.map((item, index) => (
                    <ListArticle id={index + 1} data={item} key={index} />
                  ))
                : Array(6)
                    .fill()
                    .map((item, index) => <ListSkeleton key={index} />)}
            </>
          )}
        </Items>
        <ButtonRow>
          <button>
            <LoadMore />
            <p>Ko’proq yuklash</p>
          </button>
        </ButtonRow>
      </Container>
    </OuterContainer>
  );
}

export default NewArticles;
