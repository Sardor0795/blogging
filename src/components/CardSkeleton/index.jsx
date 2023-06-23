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
        viewBox="0 0 380 340"
      >
        <rect x="0" y="0" rx="1" ry="1" width="380" height="200" />
        <rect x="0" y="210" rx="1" ry="1" width="380" height="12" />
        <rect x="0" y="235" rx="1" ry="1" width="380" height="15" />
        <rect x="0" y="263" rx="1" ry="1" width="380" height="15" />
        <rect x="0" y="291" rx="1" ry="1" width="380" height="15" />
        <rect x="0" y="319" rx="1" ry="1" width="380" height="12" />
      </ContentLoader>
    </Container>
  );
}

export default ListSkeleton;
