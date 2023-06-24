import styled from "styled-components";

export const DesktopContainer = styled.div`
  svg {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const TabletContainer = styled.div`
  svg {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 1001px) {
    display: none;
  }
  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  justify-content: center;

  svg {
    max-width: 400px;
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 651px) {
    display: none;
  }
`;
