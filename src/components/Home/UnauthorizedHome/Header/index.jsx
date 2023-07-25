import React, { useEffect, useState } from "react";
import {
  Container,
  HashTag,
  HashTagsWrapper,
  HeaderText,
  HeaderTitle,
  MoreContentLink,
  MoreLinkIcon,
  OuterContainer,
  SignUpButton,
} from "./style";
import Auth from "../../../Auth";
import { toTop } from "../../../../utils/toTop";
import axios from "axios";
import { mainUrl } from "../../../../utils/api";

function Header() {
  const [authOpened, setAuthOpened] = useState(false);
  const [trandingTopics, setTrandingTopics] = useState(null);

  useEffect(() => {
    axios.get(`${mainUrl}/topics/tranding`).then((res) => {
      if (res.status === 200) setTrandingTopics(res?.data?.data);
    });
  }, []);

  return (
    <>
      <OuterContainer>
        <Container>
          <HeaderTitle>
            Bizning maqsadimiz oʻzbek ilmiy kontentini boyitish
          </HeaderTitle>
          <HeaderText>
            Bilimingizni maqolalarda ulashing va hamjamiyatni kengaytiring
          </HeaderText>
          <SignUpButton
            onClick={() => setAuthOpened(true)}
            type="button"
            aria-label="Hamjamiyatga qo’shiling"
          >
            Hamjamiyatga qo’shiling
          </SignUpButton>
          <HashTagsWrapper>
            {trandingTopics &&
              trandingTopics.map((item, index) => (
                <HashTag
                  key={item?.id ?? index}
                  to={`/topics/${item?.id ?? ""}`}
                  onClick={toTop}
                  aria-label={`${
                    item?.name ?? ""
                  } mavzusidagi maqolalarni ko‘ring`}
                >
                  {item?.name ? `#${item?.name}` : ""}
                </HashTag>
              ))}
          </HashTagsWrapper>
          <MoreContentLink
            to="/topics"
            onClick={toTop}
            aria-label="ko‘proq mavzularni ko‘rish"
          >
            ko‘proq mavzularni ko‘rish
            <MoreLinkIcon />
          </MoreContentLink>
        </Container>
      </OuterContainer>
      <Auth opened={authOpened} setOpened={setAuthOpened} />
    </>
  );
}

export default Header;
