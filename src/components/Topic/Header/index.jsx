import React, { useEffect, useState } from "react";
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
// import profileImg from "../../../assets/images/subscriber.png";
import Auth from "./../../Auth";
import axios from "axios";
import { mainUrl } from "../../../utils/api";

function Header({ id }) {
  const [opened, setOpened] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`${mainUrl}/topics/${id}`).then((res) => {
      if (res?.status === 200) setData(res?.data?.data?.items);
    });
  }, [id]);

  return (
    <OuterContainer>
      <Container>
        <Leftside>
          <TitleRow>
            <Icon>
              <TitleIcon />
            </Icon>
            <Title>{data?.name ?? ""}</Title>
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
              <Info.Number>{data?.post_count ?? 0}</Info.Number>
            </Info.Side>
            <Info.Side>
              <Info.Title>Yozuvchilar</Info.Title>
              <Info.Number>{data?.user_count ?? 0}</Info.Number>
            </Info.Side>
          </Info>
          <Subscribers>
            {data?.users &&
              data?.users?.length &&
              data?.users.map((item, index) => (
                <Subscriber url={item?.image} key={index} />
              ))}
          </Subscribers>
        </Rightside>
      </Container>
    </OuterContainer>
  );
}

export default Header;
