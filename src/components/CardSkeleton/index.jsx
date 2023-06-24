import React from "react";
import { Container } from "./style";
import ContentLoader from "react-content-loader";

function ListSkeleton() {
  return (
    <Container>
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
    </Container>
  );
}

export default ListSkeleton;
