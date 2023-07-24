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
  gap: 15px;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-left: 18px;
`;

List.Item = styled.li`
  color: var(--blue);
  font-size: 18px;
  line-height: 1.1;

  a {
    text-decoration: none;
    color: #585757;
  }
`;
