import React from "react";
import { DesktopContainer, MobileContainer, TabletContainer } from "./style";
import ContentLoader from "react-content-loader";

function ListSkeleton() {
  return (
    <>
      <DesktopContainer>
        <ContentLoader
          height={140}
          speed={1}
          backgroundColor={"#e5e5e5"}
          foregroundColor={"#fff"}
          viewBox="0 0 380 70"
        >
          <rect x="0" y="0" rx="1" ry="1" width="70" height="70" />

          <rect x="80" y="2.5" rx="1" ry="1" width="50" height="5" />
          <rect x="140" y="2.5" rx="1" ry="1" width="50" height="5" />

          <rect x="80" y="18.5" rx="2" ry="2" width="300" height="7" />
          <rect x="80" y="31.5" rx="2" ry="2" width="300" height="7" />
          <rect x="80" y="44.5" rx="2" ry="2" width="300" height="7" />

          <rect x="80" y="62.5" rx="1" ry="1" width="65" height="5" />
          <rect x="265" y="62.5" rx="1" ry="1" width="40" height="5" />
          <rect x="310" y="62.5" rx="1" ry="1" width="40" height="5" />
          <rect x="355" y="62.5" rx="1" ry="1" width="10" height="5" />
          <rect x="370" y="62.5" rx="1" ry="1" width="10" height="5" />
        </ContentLoader>
      </DesktopContainer>
      <TabletContainer>
        <ContentLoader
          height={140}
          speed={1}
          backgroundColor={"#e5e5e5"}
          foregroundColor={"#fff"}
          viewBox="0 0 380 70"
        >
          <rect x="0" y="0" rx="1" ry="1" width="100" height="55" />

          <rect x="110" y="2.5" rx="1" ry="1" width="50" height="5" />
          <rect x="170" y="2.5" rx="1" ry="1" width="50" height="5" />

          <rect x="110" y="15" rx="2" ry="2" width="300" height="7" />
          <rect x="110" y="30" rx="2" ry="2" width="300" height="7" />
          <rect x="110" y="44.5" rx="2" ry="2" width="300" height="7" />

          <rect x="0" y="62.5" rx="1" ry="1" width="80" height="5" />
          <rect x="215" y="62.5" rx="1" ry="1" width="60" height="5" />
          <rect x="280" y="62.5" rx="1" ry="1" width="60" height="5" />
          <rect x="345" y="62.5" rx="1" ry="1" width="15" height="5" />
          <rect x="365" y="62.5" rx="1" ry="1" width="15" height="5" />
        </ContentLoader>
      </TabletContainer>
      <MobileContainer>
        <ContentLoader
          height={140}
          speed={1}
          backgroundColor={"#e5e5e5"}
          foregroundColor={"#fff"}
          viewBox="0 0 380 360"
        >
          <rect x="0" y="0" rx="1" ry="1" width="380" height="200" />

          <rect x="0" y="210" rx="1" ry="1" width="140" height="12" />
          <rect x="150" y="210" rx="1" ry="1" width="140" height="12" />

          <rect x="0" y="235" rx="1" ry="1" width="380" height="15" />
          <rect x="0" y="263" rx="1" ry="1" width="380" height="15" />
          <rect x="0" y="291" rx="1" ry="1" width="380" height="15" />

          <rect x="0" y="319" rx="1" ry="1" width="185" height="12" />

          <rect x="0" y="344" rx="1" ry="1" width="112" height="12" />
          <rect x="122" y="344" rx="1" ry="1" width="50" height="12" />
          <rect x="182" y="344" rx="1" ry="1" width="50" height="12" />
        </ContentLoader>
      </MobileContainer>
    </>
  );
}

export default ListSkeleton;
