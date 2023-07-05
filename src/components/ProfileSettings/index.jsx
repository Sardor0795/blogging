import React from "react";
import {
  Banner,
  BannerContainer,
  BannerInside,
  Input,
  Container,
  Form,
  FormGroup,
  Image,
  Leftside,
  OuterContainer,
  Rightside,
  Row,
  TopPart,
  BannerAbsolute,
  Button,
} from "./style";
import bannerImg from "../../assets/images/profile_banner.png";
import profileImg from "../../assets/images/profile-img.png";
import { ReactComponent as Upload } from "../../assets/icons/profile-settings-upload.svg";
import { ReactComponent as Save } from "../../assets/icons/profile-settings-save.svg";

function ProfileSettings() {
  return (
    <OuterContainer>
      <Banner>
        <BannerInside url={bannerImg} />
        <BannerContainer>
          <BannerAbsolute>
            <Button position="right">
              <input type="file" id="banner-image" />
              <label htmlFor="banner-image">
                <Upload />
                <span>Yangilash</span>
              </label>
            </Button>
          </BannerAbsolute>
        </BannerContainer>
      </Banner>
      <Container>
        <TopPart>
          <Leftside>
            <Image url={profileImg} />
            <Rightside>
              <Rightside.Name>Akbarali Khasanov</Rightside.Name>
              <Button position="left">
                <input type="file" id="profile-image" />
                <label htmlFor="profile-image">
                  <Upload />
                  <span>Rasmni yangilash</span>
                </label>
              </Button>
            </Rightside>
          </Leftside>
        </TopPart>
        <Form>
          <Row>
            <FormGroup little="true">
              <label htmlFor="name">Ism</label>
              <input type="text" id="name" placeholder="Ism" />
            </FormGroup>
            <FormGroup little="true">
              <label htmlFor="surname">Familiya</label>
              <input type="text" id="surname" placeholder="Familya" />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <label htmlFor="username">Foydalanuvchi nomi</label>
              <input
                type="text"
                id="username"
                placeholder="Foydalanuvchi nomi"
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <label htmlFor="email">E-pochta</label>
              <input type="text" id="email" placeholder="E-pochta" />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <label htmlFor="bio">Bio</label>
              <textarea id="bio" rows="6" placeholder="Bio"></textarea>
            </FormGroup>
          </Row>
          <Row>
            <button type="button">
              <Save />
              <span>Saqlash</span>
            </button>
          </Row>
        </Form>
      </Container>
    </OuterContainer>
  );
}

export default ProfileSettings;
