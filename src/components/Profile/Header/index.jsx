import React, { useEffect, useState } from "react";
import {
  Banner,
  Container,
  Image,
  Info,
  Leftside,
  OuterContainer,
  Rightside,
  TopPart,
  About,
} from "./style";
// import bannerImg from "../../../assets/images/profile_banner.png";
// import profileImg from "../../../assets/images/profile-img.png";
import { ReactComponent as Plus } from "../../../assets/icons/plus.svg";
import Auth from "./../../Auth";
import { useParams } from "react-router-dom";
import axios from "axios";
import { mainUrl } from "../../../utils/api";

function Header() {
  const [opened, setOpened] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const { id: name } = useParams();

  useEffect(() => {
    axios.get(`${mainUrl}/users/public/${name}`).then((res) => {
      if (res?.status === 200) setUserInfo(res?.data?.data);
    });
  }, [name]);

  return (
    <OuterContainer>
      <Banner url={userInfo?.users?.tab_url} />
      <Container>
        <TopPart>
          <Leftside>
            <Image url={userInfo?.users?.user_img} />
            <Rightside>
              <Rightside.Name>
                {userInfo?.users?.full_name ?? ""}
              </Rightside.Name>
              <button onClick={() => setOpened(true)}>
                <Plus />
                <span>Obuna bo’lish</span>
              </button>
              <Auth opened={`${opened}`} setOpened={setOpened} />
            </Rightside>
          </Leftside>
          <Info>
            <Info.Side>
              <Info.Title>Maqolalar</Info.Title>
              <Info.Number>{userInfo?.postsCount ?? 0}</Info.Number>
            </Info.Side>
            <Info.Side>
              <Info.Title>Obunachilar</Info.Title>
              <Info.Number>{userInfo?.followersCount ?? 0}</Info.Number>
            </Info.Side>
          </Info>
        </TopPart>
        <About>{userInfo?.users?.description ?? ""}</About>
      </Container>
    </OuterContainer>
  );
}

export default Header;
