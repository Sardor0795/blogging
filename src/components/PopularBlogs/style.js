import styled from "styled-components";
import { globalContainer } from "../../root/global";
import { ReactComponent as titleIcon } from "../../assets/icons/title-icon.svg";

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
`;

export const TitleIcon = styled(titleIcon)`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
