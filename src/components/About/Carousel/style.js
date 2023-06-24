import styled from "styled-components";

export const CarouselBox = styled.div`
  width: 100%;
`;
export const CarouselBoxImg = styled.div`
  width: 100%;
  height: 350px;
  background-color: #f0f0f0;
  margin-bottom: 24px;
  background-image: url("${({ img }) => img}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
export const CarouselBoxTitle = styled.p`
  color: #1c1c1c;
  font-size: 20px;
  font-family: Inter;
  font-weight: 500;
  line-height: 28px;
`;
