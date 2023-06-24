import React from "react";
import {
  Container,
  Form,
  FormGroup,
  OuterContainer,
  Recommendation,
  Search,
} from "./style";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";

function Header() {
  return (
    <OuterContainer>
      <Container>
        <Form>
          <FormGroup>
            <input type="text" placeholder="Qidiruv" id="search" />
            <label htmlFor="search">
              <Search>
                <SearchIcon />
              </Search>
            </label>
          </FormGroup>
        </Form>
        <Recommendation>
          <div>Tavsiya etiladi:</div>
          <Recommendation.Items>
            <Recommendation.Item>ux</Recommendation.Item>
            <Recommendation.Item>madaniyat</Recommendation.Item>
            <Recommendation.Item>san’at</Recommendation.Item>
          </Recommendation.Items>
        </Recommendation>
      </Container>
    </OuterContainer>
  );
}

export default Header;
