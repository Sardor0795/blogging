import React from "react";
import { Button } from "./style";
import { ReactComponent as LoadMore } from "../../assets/icons/load_more.svg";

function LoadMoreButton(props) {
  return (
    <Button {...props}>
      <LoadMore />
      <p>Ko’proq yuklash</p>
    </Button>
  );
}

export default LoadMoreButton;
