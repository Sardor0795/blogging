import React, { useState } from "react";
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
import bannerImg from "../../../assets/images/profile_banner.png";
import profileImg from "../../../assets/images/profile-img.png";
import { ReactComponent as Plus } from "../../../assets/icons/plus.svg";
import Auth from "./../../Auth";

function Header() {
  const [opened, setOpened] = useState(false);

  return (
    <OuterContainer>
      <Banner url={bannerImg} />
      <Container>
        <TopPart>
          <Leftside>
            <Image url={profileImg} />
            <Rightside>
              <Rightside.Name>Akbarali Khasanov</Rightside.Name>
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
              <Info.Number>48</Info.Number>
            </Info.Side>
            <Info.Side>
              <Info.Title>Obunachilar</Info.Title>
              <Info.Number>8129</Info.Number>
            </Info.Side>
          </Info>
        </TopPart>
        <About>
          На третьем курсе Азамат начал заниматься рэпом. Работал хирургом, но в
          скором времени бросил и стал заниматься музыкой. Занимается рэпом с
          2007 года. В 2007—2013 гг. выступал под псевдонимом Shau, затем сменил
          его на MiyaGi. Свой псевдоним взял в честь мистера Мияги из фильма
          «Парень-каратист». В 2009 году Азамат вступил в творческое объединение
          Dope Records, куда также, помимо Эндшпиля, входили Намо Миниган,
          Shuga, Асаб, SH Kera, группа The GuyS. В августе 2014 года Азамат
          основал собственный лейбл Asata, куда, помимо него, вошли Намо Миниган
          и Amigo. За время пребывания в Asata Азамат выпустил, ставшие
          успешными на тот момент, клипы на треки «Колибри», «Дом», «Бонни».
        </About>
      </Container>
    </OuterContainer>
  );
}

export default Header;
