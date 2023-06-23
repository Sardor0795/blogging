import React from "react";
import { DesktopContainer, MobileContainer } from "./style";
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
          <rect x="80" y="2.5" rx="1" ry="1" width="300" height="5" />
          <rect x="80" y="20" rx="2" ry="2" width="300" height="7" />
          <rect x="80" y="30" rx="2" ry="2" width="300" height="7" />
          <rect x="80" y="40" rx="2" ry="2" width="300" height="7" />
          <rect x="80" y="60" rx="1" ry="1" width="300" height="5" />
        </ContentLoader>
      </DesktopContainer>
      <MobileContainer>
        <ContentLoader
          height={140}
          speed={1}
          backgroundColor={"#e5e5e5"}
          foregroundColor={"#fff"}
          viewBox="0 0 380 340"
        >
          <rect x="0" y="0" rx="1" ry="1" width="380" height="200" />
          <rect x="0" y="210" rx="1" ry="1" width="380" height="12" />
          <rect x="0" y="235" rx="1" ry="1" width="380" height="15" />
          <rect x="0" y="263" rx="1" ry="1" width="380" height="15" />
          <rect x="0" y="291" rx="1" ry="1" width="380" height="15" />
          <rect x="0" y="319" rx="1" ry="1" width="380" height="12" />
        </ContentLoader>
      </MobileContainer>
    </>
  );
}

export default ListSkeleton;
