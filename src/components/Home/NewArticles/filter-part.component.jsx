import React, { useEffect, useState } from "react";
import useSearch from "../../../hooks/useSearch";
import { useLocation, useNavigate } from "react-router-dom";
import { replaceUrl } from "../../../utils/replaceUrl";
import {
  Dropdown,
  DropdownBody,
  DropdownHeader,
  Layer,
  ListCard,
  TopPart,
} from "./filter-part.style";
import { ReactComponent as NewArticlesIcon } from "../../../assets/icons/new_articles.svg";
import { ReactComponent as DropdownIcon } from "../../../assets/icons/new_articles_dropdown.svg";
import { ReactComponent as ListIcon } from "../../../assets/icons/new_articles_list.svg";
import { ReactComponent as CardIcon } from "../../../assets/icons/new_articles_card.svg";

function FilterPart() {
  // Toggle List Card  --Start
  const search = useSearch();
  const navigate = useNavigate();
  const location = useLocation();
  const [listActive, setListActive] = useState(search.get("type") !== "card");

  const onChangeUrl = (name, value) => {
    navigate(`${location.pathname}${replaceUrl(name, value)}`);
  };

  const listCardChange = (name) => {
    setListActive(name !== "card");
    onChangeUrl("type", name !== "card" ? "" : name);
  };
  // Toggle List Card  --End

  const [opened, setOpened] = useState(false);
  const [topics, setTopics] = useState(["Barcha maqolalar"]);
  const [topicActive, setTopicActive] = useState("Barcha maqolalar");

  const checkTopic = () => {
    if (topics.includes(search.get("topic")))
      setTopicActive(search.get("topic"));
    else {
      setTopicActive("Barcha maqolalar");
      onChangeUrl("topic", "");
    }
  };

  useEffect(() => {
    setTopics([...topics, "Texnologiya", "Siyosat", "Dasturlash"]);
    checkTopic();
  }, []);

  useEffect(() => {
    checkTopic();
  }, [topicActive]);

  const handleTopicChange = (topic) => {
    setTopicActive(topic);
    onChangeUrl("topic", topic === "Barcha maqolalar" ? "" : topic);
    setOpened(false);
  };

  return (
    <TopPart>
      <TopPart.Leftside>
        <NewArticlesIcon />
        <div>Yangi maqolalar</div>
      </TopPart.Leftside>
      <TopPart.Rightside>
        <Dropdown>
          <DropdownHeader
            opened={`${opened}`}
            onClick={() => setOpened((p) => !p)}
          >
            <div>{topicActive}</div>
            <DropdownIcon />
          </DropdownHeader>
          <DropdownBody opened={`${opened}`}>
            {topics
              .filter((item) => item !== topicActive)
              .map((item, index) => (
                <DropdownBody.Item
                  onClick={() => handleTopicChange(item)}
                  key={index}
                >
                  {item}
                </DropdownBody.Item>
              ))}
          </DropdownBody>
          {opened && <Layer onClick={() => setOpened(false)} />}
        </Dropdown>
        <ListCard>
          <ListCard.Item
            active={`${listActive}`}
            onClick={() => listCardChange("list")}
          >
            <ListIcon />
          </ListCard.Item>
          <ListCard.Item
            active={`${!listActive}`}
            onClick={() => listCardChange("card")}
          >
            <CardIcon />
          </ListCard.Item>
        </ListCard>
      </TopPart.Rightside>
    </TopPart>
  );
}

export default FilterPart;
