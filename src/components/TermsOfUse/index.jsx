import React from "react";
import Header from "./Header";
import "@splidejs/react-splide/css";
import {
  Container,
  HeaderBgImg,
  HeaderBgImgMobile,
  Ol,
  OuterContainer,
  Title,
} from "./style";

function TermsOfUseComponent() {
  return (
    <>
      <OuterContainer>
        <HeaderBgImgMobile />
        <Header />
        <Container>
          <Title>1. TERMINLAR</Title>
          <Ol>
            <li>
              bossblog.uz sayti – bu kontentning serverdagi joylashuv o‘rnidir.
            </li>
            <li>
              “bossblog.uz” huquqiy axborot portali – O‘zbekiston Respublikasi
              fuqarolari, chet el fuqarolari va fuqaroligi bo‘lmagan shaxslar
              onlayn rejimda bepul huquqiy axborot va maslahat olishlari uchun
              xizmatini ko‘rsatuvchi sayt.
            </li>
            <li>
              Shaxsiy maʼlumotlar – muayyan jismoniy yoki yuridik shaxsga
              (shaxsiy maʼlumot subyekti) bevosita yoki bilvosita aloqador
              bo‘lgan har qanday maʼlumot hisoblanadi.
            </li>
            <li>
              Shaxsiy maʼlumotlarning maxfiyligi – jismoniy yoki yuridik
              shaxslarning maʼlumotlaridan foydalanish huquqiga ega bo‘lgan
              shaxslarning, boshqalarga taalluqli maʼlumotlardan ularning
              roziligisiz yoki qonuniy asoslarsiz foydalanmasligi va
              tarqatmasligi uchun majburiy talab hisoblanadi.
            </li>
          </Ol>
          <Title top="true">
            2. FOYDALANUVCHINING PORTAL SAYTI TOMONIDAN YIG‘ILADIGAN VA QAYTA
            ISHLANADIGAN SHAXSIY MAʼLUMOTI
          </Title>
          <Ol start={5}>
            <li>
              Ushbu Maxfiylik siyosati foydalanuvchining saytdan ro‘yxatdan
              o‘tish, huquqiy hujjatlardan foydalanish chog‘ida sayt tomonidan
              so‘ralgan maʼlumotlar kiritilganda ushbu maʼlumotlarning
              maxfiyligini muhofaza qilish va oshkor etmaslik tartibini
              taʼminlashga qaratilgan Portal maʼmuriyatining (bundan keyin
              matnda Maʼmuriyat deb yuritiladi) majburiyatlarini belgilaydi.
            </li>
            <li>
              Ushbu Maxfiylik siyosati doirasida qayta ishlashga ruxsat berilgan
              shaxsiy maʼlumotlar Saytda ro‘yxatdan o‘tish chog‘ida jadvalni
              to‘ldirish orqali foydalanuvchi tomonidan mustaqil ravishda taqdim
              etiladi va u quyidagilarni o‘z ichiga oladi: Foydalanuvchining
              familiyasi, ismi-sharifi, foydalanuvchining telefon raqami,
              elektron pochta manzili (e-mail). Shuningdek, ishlov beriluvchi
              maʼlumotlarga Foydalanuvchi tomonidan mustaqil ravishda sayt
              maʼmuriyatiga yoki maʼmuriyatning iltimosiga ko‘ra taqdim etilgan
              har qanday qo‘shimcha maʼlumot kiradi.
            </li>
          </Ol>
        </Container>
        <HeaderBgImg />
      </OuterContainer>
    </>
  );
}

export default TermsOfUseComponent;
