import React from "react";
import { Helmet } from "react-helmet";

function HelmetComponent() {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.5.10/webfont.js"></script>
    </Helmet>
  );
}

export default HelmetComponent;
