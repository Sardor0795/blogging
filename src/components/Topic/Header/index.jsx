import React, { useState } from "react";
import {
  Container,
  Leftside,
  OuterContainer,
  Rightside,
  TitleRow,
  Icon,
  Title,
  Buttons,
  Info,
  Subscribers,
  Subscriber,
} from "./style";
import { ReactComponent as TitleIcon } from "../../../assets/icons/topic.svg";
import profileImg from "../../../assets/images/subscriber.png";
import Auth from "./../../Auth";

function Header() {
  const [opened, setOpened] = useState(false);

  return (
    <OuterContainer>
      <Container>
        <Leftside>
          <TitleRow>
            <Icon>
              <TitleIcon />
            </Icon>
            <Title>Programming Languages</Title>
          </TitleRow>
          <Buttons>
            <button onClick={() => setOpened(true)}>Kuzatish</button>
            <button onClick={() => setOpened(true)}>Yozishni boshlash</button>
          </Buttons>
          <Auth opened={`${opened}`} setOpened={setOpened} />
        </Leftside>
        <Rightside>
          <Info>
            <Info.Side>
              <Info.Title>Hikoyalar</Info.Title>
              <Info.Number>48</Info.Number>
            </Info.Side>
            <Info.Side>
              <Info.Title>Yozuvchilar</Info.Title>
              <Info.Number>8129</Info.Number>
            </Info.Side>
          </Info>
          <Subscribers>
            <Subscriber url={profileImg} />
            <Subscriber url={profileImg} />
            <Subscriber url={profileImg} />
            <Subscriber url={profileImg} />
            <Subscriber url={profileImg} />
            <Subscriber url={profileImg} />
            <Subscriber url={profileImg} />
            <Subscriber url={profileImg} />
          </Subscribers>
        </Rightside>
      </Container>
    </OuterContainer>
  );
}

export default Header;
