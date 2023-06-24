import styled from "styled-components";
import { globalContainer } from "../../root/global";

export const OuterContainer = styled.div`
  min-height: 100vh;
  background-color: #fff;
`;

export const TopicsContainer = styled.div`
  ${globalContainer};
  margin-inline: auto;
  padding-block: 80px;
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const TopicsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

TopicsItem.Header = styled.div`
  color: var(--dark-black);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.1;
`;

TopicsItem.List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 18px;
`;

TopicsItem.ListItem = styled.li`
  color: var(--blue);
  font-size: 16px;
  line-height: 1.1;

  a {
    text-decoration: none;
    color: #585757;
  }
`;
