import styled from "styled-components";
import { globalContainer } from "../../../../root/global";
import { ReactComponent as titleIcon } from "../../../../assets/icons/title-icon.svg";

export const OuterContainer = styled.div`
  margin: 80px 0;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
`;

export const SectionTitle = styled.h3`
  color: #1c1c1c;
  font-size: 16px;
  font-family: Inter;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

export const TitleIcon = styled(titleIcon)`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export const PopCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 771px) {
    grid-template-columns: 1fr;
  }
`;
