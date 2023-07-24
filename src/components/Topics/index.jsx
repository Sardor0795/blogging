import React, { useEffect, useState } from "react";
import { List, OuterContainer, TopicsContainer } from "./style";
import Header from "./Header";
import { Link } from "react-router-dom";
import { toTop } from "./../../utils/toTop";
import axios from "axios";
import { mainUrl } from "./../../utils/api";

function Topics() {
  const [topics, setTopics] = useState(null);

  useEffect(() => {
    axios.get(`${mainUrl}/topics`).then((res) => {
      if (res.status === 200) setTopics(res?.data?.data);
      console.log(res);
    });
  }, []);

  return (
    <OuterContainer>
      <Header />
      <TopicsContainer>
        {topics &&
          topics.map(({ name, id }, index) => (
            <List>
              <List.Item>
                <Link to={id} onClick={toTop}>
                  {name}
                </Link>
              </List.Item>
            </List>
          ))}
      </TopicsContainer>
    </OuterContainer>
  );
}

export default Topics;
