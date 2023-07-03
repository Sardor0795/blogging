import React from "react";
import {
  AddTopic,
  Container,
  FilterPart,
  OuterContainer,
  Row,
  TopicLink,
} from "./style";
import NewArticles from "../UnauthorizedHome/NewArticles";
import { ReactComponent as Plus } from "../../../assets/icons/plus-gray.svg";

function AuthHomeComponent() {
  return (
    <OuterContainer>
      <FilterPart>
        <Container>
          <AddTopic>
            <span>
              <Plus />
            </span>
            <span>Bo‘lim qo‘shish</span>
          </AddTopic>
          <Row>
            <TopicLink active="true">Siz uchun</TopicLink>
            <TopicLink>A’zo bo‘linganlar</TopicLink>
          </Row>
        </Container>
      </FilterPart>
      <NewArticles auth />
    </OuterContainer>
  );
}

export default AuthHomeComponent;
