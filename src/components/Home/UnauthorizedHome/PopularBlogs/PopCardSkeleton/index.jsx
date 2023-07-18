import React from "react";
import { PopCardSkeleton } from "./style";
import ContentLoader from "react-content-loader";

const PopCardSkeletonComponent = () => {
  return (
    <PopCardSkeleton>
      <ContentLoader
        height={140}
        speed={1}
        backgroundColor={"#e5e5e5"}
        foregroundColor={"#fff"}
        viewBox="0 0 380 70"
      >
        <rect x="0" y="0" rx="8" ry="8" width="70" height="70" />
        <rect x="80" y="5" rx="3" ry="3" width="100" height="10" />
        <rect x="190" y="5" rx="3" ry="3" width="100" height="10" />
        <rect x="80" y="35" rx="4" ry="4" width="300" height="12" />
        <rect x="80" y="53" rx="4" ry="4" width="300" height="12" />
      </ContentLoader>
    </PopCardSkeleton>
  );
};

export default PopCardSkeletonComponent;
