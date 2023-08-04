import React from "react";
import Header from "./Header";
import "@splidejs/react-splide/css";
import {
  Container,
  HeaderBgImg,
  HeaderBgImgMobile,
  Ol,
  OuterContainer,
  PlainText,
  Title,
} from "./style";

function PrivacyComponent() {
  return (
    <>
      <OuterContainer>
        <HeaderBgImgMobile />
        <Header />
        <Container>
          <PlainText>
            Shaxsiy maʼlumotlarning maxfiylik siyosati (bundan keyin matnda
            Siyosat, deb yuritiladi) “bossblog.uz” portali (bundan keyin matnda
            Portal, deb yuritiladi).Portal yoki shu portalga aloqador boshqa
            mobil ilovalardan foydalanish chog‘ida foydalanuvchi haqida
            olinadigan maʼlumotlarga nisbatan qo‘llaniladi. Portal O‘zbekiston
            Respublikasi qonunlariga binoan rasman ro‘yxatdan o‘tgan sayt
            hisoblanadi.Portalning har qanday resurslaridan foydalanish
            foydalanuvchi tomonidan mazkur Siyosat va unda ko‘rsatilgan
            shartlarga so‘zsiz rozi ekanligini anglatadi. Agar foydalanuvchi
            mazkur Siyosat shartlariga rozi bo‘lmagan taqdirda u Portal
            resurslaridan foydalanmasligi kerak.
          </PlainText>
          <Title top="true">1. SHAXSIY MAʼLUMOTLAR XAVFSIZLIGI</Title>
          <Ol start={1}>
            <li>
              Shaxsiy maʼlumotlarni noqonuniy xatti-harakatlardan, yo‘qolish,
              yo‘q qilish va uchinchi shaxslar tomonidan ruxsatsiz kirishdan
              himoya qilish uchun maʼmuriyat zamonaviy dasturiy taʼminot va
              apparatni himoya qilish vositalaridan hamda tashkiliy xavfsizlik
              choralaridan foydalanadi.Maʼmuriyat maʼlumotlarning maxfiyligini
              taʼminlash uchun barcha imkoniyatlarni ishga solishni o‘z
              zimmasiga oladi.Maʼmuriyat foydalanuvchining iltimosi yoki
              uchinchi shaxslarning daʼvolari bo‘yicha sud yoxud huquqni
              muhofaza qiluvchi organlarning so‘roviga asosan, maʼmuriyatning
              huquqlari va qonuniy manfaatlarini taʼminlash yuzasidan,
              shuningdek qonunchilikda belgilangan boshqa hollarda
              foydalanuvchining shaxsiy maʼlumotlariga kirish huquqiga ega.
            </li>
          </Ol>
          <Title top="true">2. MAXFIYLIK SIYOSATINI O‘ZGARTIRISH</Title>
          <Ol start={2}>
            <li>
              Maʼmuriyat ushbu Siyosatga mustaqil ravishda o‘zgartirish kiritish
              huquqiga ega. Siyosatning o‘zgartirilgan versiyasi Saytda eʼlon
              qilingan paytdan boshlab darhol kuchga kiradi va foydalanuvchi
              uchun majburiy hisoblanadi. Foydalanuvchilarga Siyosat o‘zgarishi
              to‘g‘risida maxsus xabar berish mumkin, ammo bunday ogohlantirish
              talab qilinmaydi va Maʼmuriyat barcha manfaatdor tomonlarni
              Siyosatdagi o‘zgarishlarni kuzatishga undaydi. Siyosatdagi
              o‘zgarishlarga rozi bo‘lmagan taqdirda, foydalanuvchi Saytdan
              foydalanishni to‘xtatishi shart.
            </li>
          </Ol>
        </Container>
        <HeaderBgImg />
      </OuterContainer>
    </>
  );
}

export default PrivacyComponent;
