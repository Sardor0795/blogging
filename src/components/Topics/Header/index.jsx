import React, { useEffect, useState, useTransition } from "react";
import {
  Container,
  Form,
  FormGroup,
  OuterContainer,
  Recommendation,
  Result,
  Results,
  Search,
} from "./style";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import axios from "axios";
import { mainUrl } from "./../../../utils/api";
import { toTop } from "./../../../utils/toTop";

function Header() {
  const [trandingTopics, setTrandingTopics] = useState(null);
  const [searchingText, setSearchingText] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const [, startTransition] = useTransition();
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    axios.get(`${mainUrl}//topics/tranding`).then((res) => {
      if (res?.status === 200)
        setTrandingTopics([
          res?.data?.data[0],
          res?.data?.data[1],
          res?.data?.data[2],
        ]);
    });
  }, []);

  useEffect(() => {
    if (!searchingText.trim()) {
      startTransition(() => {
        setSearchResults(null);
      });
      return;
    }
    let obj = {
      name: searchingText.trim(),
    };
    axios.post(`${mainUrl}/topics/search`, obj).then((res) => {
      if (res?.status === 200)
        startTransition(() => {
          setSearchResults(res?.data?.data?.topics);
        });
    });
  }, [searchingText]);

  const handleChange = (e) => {
    startTransition(() => {
      setSearchingText(e.target.value);
    });
  };

  return (
    <OuterContainer>
      <Container>
        <Form onSubmit={(e) => e.preventDefault()}>
          <FormGroup>
            <input
              value={searchingText}
              onChange={handleChange}
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
              type="text"
              placeholder="Qidiruv"
              id="search"
            />
            <label htmlFor="search">
              <Search>
                <SearchIcon />
              </Search>
            </label>
            <Results visible={`${searchResults && inputFocus}`}>
              {searchResults?.length
                ? searchResults.map((item, index) => (
                    <Result key={item?.id ?? index}>
                      <Result.Link to={item?.id ?? ""} onClick={toTop}>
                        {item?.name ?? ""}
                      </Result.Link>
                    </Result>
                  ))
                : "Natijalar topilmadi!"}
            </Results>
          </FormGroup>
        </Form>
        <Recommendation>
          <div>Tavsiya etiladi:</div>
          <Recommendation.Items>
            {trandingTopics?.map((item, index) => (
              <Recommendation.Item key={item?.id ?? index}>
                {item?.name?.toLowerCase()}
              </Recommendation.Item>
            ))}
          </Recommendation.Items>
        </Recommendation>
      </Container>
    </OuterContainer>
  );
}

export default Header;
